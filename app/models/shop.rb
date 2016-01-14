class Shop < ActiveRecord::Base
  has_many :articles
  belongs_to :user

  validates :user, presence: true #always validate the model and not the id 
  validates :name, presence: true
  validates :language, presence: true
  validates :country, presence: true 
  validates :currency, presence: true, length: {is: 3}
  # validates :logo_url 
  # validates :hover_url

  def self.name_available?(name)
  	if name.empty?
  		false
  	else
  		!self.find_by_name(name)
  	end
  end

  def self.countries(lang="en")
  	return I18nData.countries if lang == "en"
  	I18nData.countries(lang)
  end

  def self.languages(lang="en")
  	return I18nData.languages if lang == "en"
  	I18nData.languages(lang)
  end

  def self.currencies
  	Money::Currency.all.map{|c| c.iso_code}
  end
end
