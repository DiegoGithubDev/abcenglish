class RegistrationsController < Devise::RegistrationsController
  def sign_up_params
    params.require(:student).permit(:name, :last_name,:user_name, :email, :password, :password_confirmation, :current_password)
  end

  def account_update_params
    params.require(:student).permit(:name, :last_name,:user_name, :email, :password, :password_confirmation, :current_password)
  end
end
