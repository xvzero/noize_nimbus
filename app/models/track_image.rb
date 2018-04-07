class TrackImage < ApplicationRecord
  has_attached_file :image, default_url: "/images/:style/default_image.svg"
  validates_attachment_content_type :image,
                                    content_type: /^image\/(jpg|jpeg|pjpeg|png|x-png|gif|svg)$/

  belongs_to :track
end
