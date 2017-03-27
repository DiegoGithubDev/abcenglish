class SessionsController < Devise::SessionsController
  def new
    super
  end
  def create
    @studentx= Student.find_by(user_name: params[:user_name],password: params[:password])
    if @studentx != nil
      #render :text => 'vista dashboard'
      redirect_to :controller =>"students" , :action =>"dashboard"
    else
      @student_cards = StudentCard.find_by(user_name: params[:user_name],password: params[:password])
      if @student_cards!=nil
        redirect_to :controller =>"registrations" , :action =>"new"
      end
    end
  end
end
