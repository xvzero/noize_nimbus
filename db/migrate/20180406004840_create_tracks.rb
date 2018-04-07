class CreateTracks < ActiveRecord::Migration[5.1]
  def change
    create_table :tracks do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.string :track_url, null: false
      t.attachment :track_file
      t.string :genre
      t.text :description

      t.timestamps
    end
  end
end
