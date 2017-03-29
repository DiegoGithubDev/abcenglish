Rails.application.routes.draw do

  get 'perfil/principal'

  resources :pictures
  resources :photos
  # registrations: 'registrations',
  devise_for :students, :controllers => {sessions: 'students/sessions',
                                         registrations: 'students/registrations'

  }
  resources :student_cards do
	  collection do
	  		get 'register'
	  end
  end
  root 'student_cards#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
		 