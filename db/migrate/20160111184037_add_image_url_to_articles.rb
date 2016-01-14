class AddImageUrlToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :img_url, :string
  end
end
