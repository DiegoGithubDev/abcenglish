class DashboardController < ApplicationController
  before_action :authenticate_student!
  def index
    @page_current= current_student.current_page
  end

  def save
  end

  def book_container
  end


  def right
    @page_current = 2 #get current page from student
    @page_current =  @page_curent + 1

    render "dashboard/page2"
  end

  def left
    @page_current = 2 #get current page from student
    @page_current =  @page_current - 1

    render "dashboard/page1"
  end


end
