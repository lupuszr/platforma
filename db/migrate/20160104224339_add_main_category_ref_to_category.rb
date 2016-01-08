class AddMainCategoryRefToCategory < ActiveRecord::Migration
  def change
    add_reference :categories, :main_category, index: true, foreign_key: true
  end
end
