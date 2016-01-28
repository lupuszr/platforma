class ArticleImageUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process tags: ['articles']
  
  version :display do
    process eager: true
    process resize_to_fit: [600, 315]
  end

  version :thumbnail do
    process eager: true
    process resize_to_fit: [150, 150]
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def content_type_white_list
    /image\//
  end
end
