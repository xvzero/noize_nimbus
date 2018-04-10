class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
  end

  def create
    @track = Track.new(
      author_id: track_params[:author_id],
      title: track_params[:title],
      track_url: track_params[:track_url],
      genre: track_params[:genre],
      description: track_params[:description],
      track_file: track_params[:track_file]
    )

    if @track.save
      if track_params[:track_img_file] == "undefined"
        @track_image = TrackImage.create(track_id: @track.id)
      else
        @track_image = TrackImage.create(track_id: @track.id, image: track_params[:track_img_file])
      end

      render "api/session/upload"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:author_id,
                                  :title,
                                  :track_url,
                                  :genre,
                                  :description,
                                  :track_file,
                                  :track_img_file)
  end
end
