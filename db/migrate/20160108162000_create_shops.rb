class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :name
      t.string :language
      t.string :country
      t.string :logo_url
      t.string :hover_url
      
      t.timestamps null: false
    end
  end
end
