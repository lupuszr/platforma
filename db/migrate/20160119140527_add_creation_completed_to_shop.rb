class AddCreationCompletedToShop < ActiveRecord::Migration
  def change
    add_column :shops, :creation_completed, :boolean, default: false
  end
end
