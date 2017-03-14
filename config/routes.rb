Rails.application.routes.draw do
  resources :students
  resources :student_cards
  root 'student_cards#index'
  resources :login
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
