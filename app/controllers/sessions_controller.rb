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
      @obj_student_card=StudentCard.find(params[:id])
      @student_cards = StudentCard.find_by(user_name: params[:user_name],password: params[:password])
      if @student_cards!=nil && @obj_student_card.state == "false"
        redirect_to :controller =>"registrations" , :action =>"new"
      end
    end
  end
end
