Rails.application.routes.draw do
   #get '/login',  to: 'student_sessions#new'
  #get '/logout', to: 'student_sessions#destroy'

  get "dashboard/index"
  # registrations: 'registrations',
  devise_for :students, :controllers => {sessions: 'students/sessions',
                                         registrations: 'students/registrations'

  }

  root :to => redirect("/dashboard/index")
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
		 