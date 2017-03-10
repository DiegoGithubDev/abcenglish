Rails.application.routes.draw do
  resources :student_cards
  root 'student_cards#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
