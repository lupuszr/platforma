class AddImageColumnsToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :img_1, :string
    add_column :articles, :img_2, :string
    add_column :articles, :img_3, :string
    add_column :articles, :img_4, :string
  end
end
