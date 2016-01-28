class ChangeHoverUrlColumnNameToBanner < ActiveRecord::Migration
  def change
    rename_column :shops, :hover_url, :banner
  end
end
