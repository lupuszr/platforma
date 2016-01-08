class Article < ActiveRecord::Base
	fuzzily_searchable :name
  has_and_belongs_to_many :categories
end
