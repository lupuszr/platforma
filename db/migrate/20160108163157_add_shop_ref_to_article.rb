class AddShopRefToArticle < ActiveRecord::Migration
  def change
    add_reference :articles, :shop, index: true, foreign_key: true
  end
end
