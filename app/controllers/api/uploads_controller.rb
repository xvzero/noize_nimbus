class Api::UploadsController < ApplicationController
  def create
    @upload = Upload.new(upload_params)

    if @upload.save
      login(@upload)
      render "api/uploads/show"
    else
      render json: @uploads.errors.full_messages, status: 422
    end
  end

  def show
    @upload = Upload.find(params[:id])
  end

  private

  def upload_params
    params.require(:user).permit(:track_file, :track_url)
  end
end
