class Category < ActiveRecord::Base
  fuzzily_searchable :name
  has_and_belongs_to_many :articles
  belongs_to :main_category

  validates :main_category, presence: true
  validates :name, presence: true

  belongs_to :master_category, class_name: 'Category'
  has_many :sub_categories, class_name: 'Category', foreign_key: 'category_id'

  scope :top_categories, ->(id) { where('main_category_id = :id and category_id IS NULL', id: id) }
  scope :sub_categories, ->(id) { where(category_id: id) }

  scope :top_category, -> { find_by(category_id: nil) }
  scope :sub_category, -> { find_by(category_id: !nil) }
  
  def create_sub_category(obj)
    hash = obj.merge(main_category_id: main_category_id)
    sub_categories.create(hash)
  end

end

# id # name  # description # ... # category_id
# 1  # test  # desc        # ... # nil
# 2  # test2 # desc2       # ... # nil
#
#
# n  # obj   # ndesc       # ...   1
