json.merge! track.attributes

json.track_file_url track.track_file.url
json.track_img_url track.track_image.image.url

json.track_artist track.user.display_name
