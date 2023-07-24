Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:create, :show]
    resources :listings, only:[:index, :show, :create, :update, :destroy]
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
