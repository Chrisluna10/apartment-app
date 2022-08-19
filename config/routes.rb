Rails.application.routes.draw do
  resources :items
  resources :apartments
  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  get "current_user", to: "items#logged_in"
  get "user_index", to: "items#userindex"

end
