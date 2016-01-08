class CreateMainCategories < ActiveRecord::Migration
  def change
    create_table :main_categories do |t|
      t.string :name
      t.text :description
      t.string :img_url

      t.timestamps null: false
    end
  end
end
