require 'elasticsearch/model'

class Article < ActiveRecord::Base
  include Filterable
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  mount_uploader :img_0, ArticleImageUploader
  mount_uploader :img_1, ArticleImageUploader
  mount_uploader :img_2, ArticleImageUploader
  mount_uploader :img_3, ArticleImageUploader
  mount_uploader :img_4, ArticleImageUploader

  register_currency :eur

  monetize :price_cents
  
  has_and_belongs_to_many :categories
  belongs_to :shop

  validates :shop, presence: true
  validates :name, presence: true
  
  attr_accessor :category_id
  attr_accessor :sub_category_id

  scope :fuzzy_search, ->(content) { search(query: {match: {_all: {query: content, fuzziness: 1 } } }).records }
  scope :min_price, ->(price) { where('price_cents >= :min_price',min_price: price) }
  scope :max_price, ->(price) { where('price_cents <= :max_price',max_price: price) }
  scope :main_category, ->(id) {Article.joins(:categories).where("categories.main_category_id = :id",id: id)}
  scope :top_category, ->(id) {Category.find(id).articles}
  scope :sub_category, ->(id) {Category.find(id).articles}
 
  def top_category
    categories.top_category
  end
  
  def sub_category
    categories.sub_category
  end

  def self.domain_filter(domain="Article",id=nil)
    case domain
    when 'MainCategory'
      Object.const_get('MainCategory').find(id).articles
    when 'TopCategory'
      Object.const_get('Category').find(id).articles
    when 'SubCategory'
      Object.const_get('Category').find(id).articles
    else
      Object.const_get('Article')
    end  
  end

  def self.create_with_categories(params)
    article = create(params)
    article.categories << Category.find(article.category_id)
    article.categories << Category.find(article.sub_category_id)
  end

end

Article.import # for auto sync model with elastic search