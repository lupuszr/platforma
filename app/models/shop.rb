# Every vendor can open a shop
# On shop/new a new shop is created, with creation_completed
# field set to false,
# when the user finish the shop creation
# the belonging fields are updated
# and creatio_completed is set to true
# every week (TBD) a cronjob is started which will check
# is the shop creation is finished if not the shop is removed from the db
# and the belonging images are deleted from cloudinary

class Shop < ActiveRecord::Base
  
  mount_uploader :logo, ShopLogoUploader
  mount_uploader :banner, ShopBannerUploader
  
  has_many :articles, dependent: :destroy
  belongs_to :user, dependent: :destroy

  validates :user, presence: true# always validate the model and not the id
  validates :name, presence: true, if: :creation_completed?
  validates :language, presence: true, if: :creation_completed?
  validates :country, presence: true, if: :creation_completed?
  validates :currency, presence: true, length: { is: 3 }, if: :creation_completed?
  validates :logo, presence: true, if: :creation_completed?
  # validates :hover_url


  def creation_completed?
    creation_completed == true
  end

  def self.name_available?(name)
    if name.empty?
      false
    else
      !find_by_name(name)
    end
  end

  def self.countries(lang = 'en')
    return I18nData.countries if lang == 'en'
    I18nData.countries(lang)
  end

  def self.languages(lang = 'en')
    return I18nData.languages if lang == 'en'
    I18nData.languages(lang)
  end

  def self.currencies
    Money::Currency.all.map(&:iso_code)
  end

end
