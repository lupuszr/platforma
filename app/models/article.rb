class Article < ActiveRecord::Base
  register_currency :eur

  monetize :price
  
  fuzzily_searchable :name
    
  has_and_belongs_to_many :categories
  belongs_to :shop

  validates :shop, presence: true
  validates :name,  presence: true
  validates :price, presence: true

end
