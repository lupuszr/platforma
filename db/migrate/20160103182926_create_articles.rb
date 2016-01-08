class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.float :price
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
