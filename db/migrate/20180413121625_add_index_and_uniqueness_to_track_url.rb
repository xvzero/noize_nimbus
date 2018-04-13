class AddIndexAndUniquenessToTrackUrl < ActiveRecord::Migration[5.1]
  def change
    add_index :tracks, :track_url, unique: true
  end
end
