class ChangeImgUrlColumnNameToImg0 < ActiveRecord::Migration
  def change
    rename_column :articles, :img_url, :img_0
  end
end
