Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:create, :show]
    resources :listings, only:[:index, :show, :create, :update, :destroy]
    resources :reservations, only: [:create, :destroy, :index]
    resources :reviews, only: [:create, :update, :destroy, :index]
  end

  get '*path', to: "static_pages#frontend_index"
end
