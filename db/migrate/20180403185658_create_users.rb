class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :display_name, null: false
      t.string :profile_url, null: false
      t.integer :age, null: false
      t.string :profile_img_url
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :country
      t.text :bio

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :profile_url, unique: true
  end
end
