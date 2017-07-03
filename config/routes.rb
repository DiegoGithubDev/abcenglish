Rails.application.routes.draw do
  get 'page4/page4'

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
  get 'dashboard/1'
  get 'dashboard/2'
  get 'dashboard/3'
  get 'dashboard/4'
  get 'dashboard/5'
  get 'dashboard/6'
  get 'dashboard/7'
  get 'dashboard/8'
  get 'dashboard/9'
  get 'dashboard/10'
  #root :to => redirect("/dashboard/index")
   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
		 