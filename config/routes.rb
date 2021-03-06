Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:index, :update, :create, :show]
    resources :tracks, only: [:index, :show, :create, :edit, :update, :destroy]
    resources :track_images, only: [:create]
    resource :session, only: [:create, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
