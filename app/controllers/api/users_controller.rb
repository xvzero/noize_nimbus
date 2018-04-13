class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])

    updated_params = user_params.reject { |_, v| v == "null" || v == "undefined" }

    if @user.update(updated_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:email,
                                 :profile_url,
                                 :display_name,
                                 :password,
                                 :age,
                                 :first_name,
                                 :last_name,
                                 :city,
                                 :country,
                                 :bio,
                                 :profile_img_file,
                                 :session_token)
  end
end
