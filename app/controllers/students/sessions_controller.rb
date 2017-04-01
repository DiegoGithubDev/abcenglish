class Students::SessionsController < Devise::SessionsController
    before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
   def new
     super
   end

  # POST /resource/sign_in
  def create
    if student_signed_in?
      render '/perfil/principal'
    else
      @student_cards = StudentCard.find_by(user_name: params[:student][:user_name],password: params[:student][:password])
      if @student_cards &&  @student_cards.state == FALSE
        #@student_cards.state = TRUE
        #@student_cards.save
        redirect_to :controller =>"registrations" , :action =>"new"
      else
      render text: "no existe el ususario"
      end
    end
  end

  # DELETE /resource/sign_out
   def destroy
     super
   end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
   def configure_sign_in_params
     devise_parameter_sanitizer.permit(:sign_in, keys: [:user_name, :password])
     #:attribute
     #params.require(:student).permit(:user_name, :password)
   end
end
