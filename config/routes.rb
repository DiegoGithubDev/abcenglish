Rails.application.routes.draw do
  root 'student_cards#index' 
  resources :students 
  resources :student_cards do
	  collection do
	  		get 'register'
	  end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
