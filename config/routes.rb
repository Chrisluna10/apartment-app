Rails.application.routes.draw do
  resources :items
  resources :apartments
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
  get "current_user", to: "items#logged_in"
  get "user_index", to: "items#userindex"

  devise_for :users, controllers: {
    registrations: 'registrations',
    sessions: 'sessions'
  }
end
