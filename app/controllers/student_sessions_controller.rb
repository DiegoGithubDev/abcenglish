class StudentSessionsController < ApplicationController
  def new
    @student = Student.new
  end

  def create
    if @student=login(params[:username], params[:paswword])
      redirect_back_or_to(student_card_path, message: "login exitoso")
    else
      flash.now[:alert]= "algo salio mal"
    end
  end

  def destroy
    logout
    redirect_to (:login, message: "logged out")
  end
end
