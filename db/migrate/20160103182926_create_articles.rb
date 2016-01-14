class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.monetize :price
      t.string :name
      t.text :description

      t.timestamps null: false
    end
  end
end
