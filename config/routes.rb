Rails.application.routes.draw do

  devise_for :students, :controllers => { registrations: 'registrations' }
  #resources :students
  resources :student_cards do
	  collection do
	  		get 'register'
	  end
  end
  root 'student_cards#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
		 