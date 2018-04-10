@tracks.each do |track|
  json.set! track.track_url do
    json.partial! 'api/tracks/track', track: track
  end
end
