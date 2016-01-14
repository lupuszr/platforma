class AddCurrencyToShop < ActiveRecord::Migration
  def change
    add_column :shops, :currency, :string
  end
end
