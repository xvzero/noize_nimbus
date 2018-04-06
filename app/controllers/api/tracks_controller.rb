class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)

    if @track.save
      render "api/session/upload"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:author_id, :title, :track_url, :genre, :description, :track_file)
  end
end
