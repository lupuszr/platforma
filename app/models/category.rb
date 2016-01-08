class Category < ActiveRecord::Base
	fuzzily_searchable :name
  has_and_belongs_to_many :articles
  belongs_to :main_categories
end
