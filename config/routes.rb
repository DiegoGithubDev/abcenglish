Rails.application.routes.draw do
  resource :students

  get 'students/index'

  get 'students/new'

  get 'students/create'

  get 'students/destroy'

  get 'students/edit'

  get 'student_sessions/new'

  get 'student_sessions/create'

  get 'student_sessions/destroy'

  get '/login',  to: 'student_sessions#new'
  get '/logout', to: 'student_sessions#destroy'

  resource :student_sessions
  #match 'login' => 'student_sessions#new', as: :login
  #match 'logout' => 'student_sessions#destroy', as: :logout

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
		 