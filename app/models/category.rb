class Category < ActiveRecord::Base
  fuzzily_searchable :name
  has_and_belongs_to_many :articles
  belongs_to :main_category

  validates :main_category, presence: true
  validates :name, presence: true


  belongs_to :master_category, :class_name => 'Category'
  has_many :sub_categories, :class_name => 'Category', :foreign_key => 'category_id'

  def create_sub_category(obj)
  	hash = obj.merge(main_category_id: self.main_category_id)
  	self.sub_categories.create(hash)
  end

end

#id #name  #description #... #category_id
# 1 #test  #desc        #... #nil
# 2 #test2 #desc2       #... #nil
#
#
# n #obj   #ndesc       #...   1