Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :artists do
      resources :songs, only: [:index, :show, :update, :create, :destroy]
    end
  end
end
