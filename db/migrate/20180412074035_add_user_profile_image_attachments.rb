class AddUserProfileImageAttachments < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_img_url
    add_attachment :users, :profile_img_file
  end
end
