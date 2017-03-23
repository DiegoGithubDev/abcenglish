class StudentSessionsController < ApplicationController
  def new
    @student = Student.new
  end

  def create

   #if @student=login(params[:username], params[:paswword])
    #  redirect_back_or_to(student_card_path, message: "login exitoso")
    #else
     # flash.now[:alert]= "algo salio mal"
    #end

    #render :text => params[:password].inspect
    #@studentx= Student.find(params[:user_name])
    @studentx= Student.all.inspect
    #if @student
     render :text => params[:user_name].inspect + @studentx
    #else
     # render :text => params[:user_name].inspect + "no existe"
    #end
  end

  def destroy
    logout
    #redirect_to (student_cards_url, message: "logged out")
  end

  private
end
