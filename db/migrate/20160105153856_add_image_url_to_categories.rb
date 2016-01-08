class AddImageUrlToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :img_url, :string
  end
end
