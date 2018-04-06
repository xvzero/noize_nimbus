class Track < ApplicationRecord
  has_attached_file :track_file
  validates_attachment_content_type :track_file,
                                    content_type:  ['audio/mpeg',
                                                    'audio/x-mpeg',
                                                    'audio/mp3',
                                                    'audio/x-mp3',
                                                    'audio/mpeg3',
                                                    'audio/x-mpeg3',
                                                    'audio/mpg',
                                                    'audio/x-mpg',
                                                    'audio/x-mpegaudio']

  has_attached_file :track_img_file, default_url: "/assets/default_img.svg"
  validates_attachment_content_type :track_img_file,
                                    content_type: /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/

  validates :title, :track_url, presence: true

  belongs_to :user,
             foreign_key: :author_id
end
