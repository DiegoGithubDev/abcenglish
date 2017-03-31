class StudentsController < ApplicationController
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

end
