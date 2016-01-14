class AddUserRefToShop < ActiveRecord::Migration
  def change
    add_reference :shops, :user, index: true, foreign_key: true
  end
end
