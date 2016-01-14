class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :surname
      t.string :forename

      t.timestamps null: false
    end
  end
end
