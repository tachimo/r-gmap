Rails.application.routes.draw do
  devise_for :users
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  get 'maps/index'
  root to: 'posts#index'
  resources :maps, only: [:index]
end
