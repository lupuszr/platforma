class ShopBannerUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process tags: ['banners']
  process resize_to_fit: [850, 200]


  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def content_type_white_list
    /image\//
  end

  def filename
     'banner.jpg' if original_filename
  end
end
