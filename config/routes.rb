Rails.application.routes.draw do
  resources :notes
  devise_for :users
  #devise_scope :user do
   # root to: "devise/sessions#new"
  #end
  get '/user/:id', to: 'site#show', as: 'user'
  delete '/user/:id/delete', to: 'site#student_delete', as: :student_delete
  root to: "site#index"
  
end
