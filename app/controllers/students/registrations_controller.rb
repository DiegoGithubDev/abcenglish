class Students::RegistrationsController < Devise::RegistrationsController
   before_action :configure_sign_up_params, only: [:create]
   before_action :configure_account_update_params, only: [:update]
   before_action :go_to_login

   # GET /resource/sign_up
   def new
     super
   end

  # POST /resource
   def create
     super
     if resource.save
       $student_cards.state=TRUE
       $student_cards.save
     end
   end

  # GET /resource/edit
   def edit
     super

   end

  # PUT /resource
   def update
     super
   end

  # DELETE /resource
   def destroy
     super
   end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
   def cancel
     super
   end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
   def configure_sign_up_params
     #devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :last_name,:user_name, :email, :password, :password_confirmation, :current_password, :image])
     params.require(:student).permit(:name, :last_name,:user_name, :email, :password, :password_confirmation, :current_password, :image,:address, :phone, :facebook, :skype)
   end

  # If you have extra params to permit, append them to the sanitizer.
   def configure_account_update_params
     #devise_parameter_sanitizer.permit(:account_update, keys: [:name, :last_name,:user_name, :email, :password, :password_confirmation, :current_password, :image])
     params.require(:student).permit(:name, :last_name,:user_name, :email, :password, :password_confirmation, :current_password, :image, :address, :phone, :facebook, :skype)
   end


  # The path used after sign up.
   def after_sign_up_path_for(resource)
     super(resource)
   end

  # The path used after sign up for inactive accounts.
   def after_inactive_sign_up_path_for(resource)
    super(resource)
   end

  private
   #logica si paso por login
   def go_to_login
     if $login==FALSE
       redirect_to :controller => 'sessions', :action => 'new'
     end
   end

    def update_fields(picturex,namex,last_namex,phonex,addressx,passwordx,password_confirmationx,facebookx,skypex)
      current_student.image= picturex
      current_student.name= namex
      current_student.last_name=last_namex
      current_student.phone=phonex
      current_student.address=addressx
      current_student.password=passwordx
      current_student.password_confirmation=password_confirmationx
      current_student.facebook=facebookx
      current_student.skype=skypex
      current_student.save

    end

end

