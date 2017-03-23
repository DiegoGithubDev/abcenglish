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
    #@studentx= Student.find_by(user_name: params[:user_name],password: params[:password]) error por la encripatacion
    @studentx= Student.find_by(user_name: params[:user_name])
    if @studentx != nil
     render :text => params[:user_name].inspect + @studentx.to_s
    else
      render :text =>' no existe el ususario'
    end
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
