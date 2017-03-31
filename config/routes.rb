Rails.application.routes.draw do

  get 'perfil/principal'

  resources :pictures
  resources :photos
  # registrations: 'registrations',
  devise_for :students, :controllers => {sessions: 'students/sessions',
                                         registrations: 'students/registrations'

  }
  root :to => redirect("/students/sign_in")
  #redirect_to root_path
  #devise_scope :students do
   # root  "students/sessions#new"
  #end
  #root :to => 'students/sessions#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
		 