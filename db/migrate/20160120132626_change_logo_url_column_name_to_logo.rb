class ChangeLogoUrlColumnNameToLogo < ActiveRecord::Migration
  def change
    rename_column :shops, :logo_url, :logo
  end
end
