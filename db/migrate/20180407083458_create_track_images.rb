class CreateTrackImages < ActiveRecord::Migration[5.1]
  def change
    create_table :track_images do |t|
      t.integer :track_id, null: false
      t.attachment :image

      t.timestamps
    end
  end
end
