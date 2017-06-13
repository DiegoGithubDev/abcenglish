class Students::SessionsController < Devise::SessionsController
    before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
   def new
      $login= FALSE
     super
   end

  # POST /resource/sign_in
  def create
      if student_signed_in?
        super
      else
        $student_cards = get_student_card
        if $student_cards  &&  !is_registered?($student_cards)
          $login = TRUE
          go_to_register
        else
          redirect_to root_path
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

  private

  def is_registered?(student_card)
    if(student_card.state==FALSE)
      return false
    else
      return true
    end
  end

  def get_student_card
    return StudentCard.find_by(user_name: params[:student][:user_name],password: params[:student][:password])
  end

  def go_to_register
    redirect_to :controller =>"registrations" , :action =>"new"
  end

    def go_to_dasboard
      redirect_to :controller =>"dashboard" , :action =>"index"
    end

end
