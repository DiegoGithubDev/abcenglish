Rails.application.routes.draw do
   #get '/login',  to: 'student_sessions#new'
  #get '/logout', to: 'student_sessions#destroy'
  root to: 'dashboard#index'
  get "dashboard/index"
  # registrations: 'registrations',
  devise_for :students, :controllers => {sessions: 'students/sessions',
                                         registrations: 'students/registrations'

  }
  resources :students
  get 'dashboard/book_container'
  post 'dashboard/book_container'
  get 'dashboard/page1'
  get 'dashboard/page2'
  get 'dashboard/page3'
  get 'calculator/left'
  post 'calculator/left'
  get 'calculator/right'
  post 'calculator/right'
  get 'dashboard/left'
  post 'dashboard/left'
  get 'dashboard/right'
  post 'dashboard/right'
  get 'dashboard/go_to_numer_page'
  post 'dashboard/go_to_numer_page'

  #root :to => redirect("/dashboard/index")
   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
		 