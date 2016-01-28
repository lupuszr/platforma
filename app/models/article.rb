class Article < ActiveRecord::Base
  mount_uploader :img_0, ArticleImageUploader
  mount_uploader :img_1, ArticleImageUploader
  mount_uploader :img_2, ArticleImageUploader
  mount_uploader :img_3, ArticleImageUploader
  mount_uploader :img_4, ArticleImageUploader

  register_currency :eur

  monetize :price_cents
  
  fuzzily_searchable :name
    
  has_and_belongs_to_many :categories
  belongs_to :shop

  validates :shop, presence: true
  validates :name, presence: true
  
  attr_accessor :category_id
  attr_accessor :sub_category_id

  def top_category
    categories.top_category
  end
  
  def sub_category
    categories.sub_category
  end

  def self.create(params)
    article = Article.new(params)
    article.categories << Category.find(article.category_id)
    article.categories << Category.find(article.sub_category_id)
    article.save!
  end


  # def self.create(params)
  #   article = super(params)
  #   article.categories << Category.find(article.category_id)
  #   article.categories << Category.find(article.sub_category_id)
  # end

end
