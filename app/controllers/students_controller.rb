class StudentsController < ApplicationController
  before_action :authenticate_student!
  def index
    @estudent= Student.all
  end

  def new
    @estudent = Student.new
  end

  def create

  end

  def destroy
  end

  def edit
  end

  def dashboard

  end

  def contenido

  end

end
