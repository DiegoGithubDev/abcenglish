class DashboardController < ApplicationController
  before_action :authenticate_student!
  MAX_PAGE_LIBRO1=100
  def index
    @page_current= current_student.current_page
  end

  def save
  end

  def book_container
  end


  def right
    if @page_current<MAX_PAGE_LIBRO1
      @page_current = @page_current + 1
      render "dashboard/page#{@page_current}"
    end
  end

  def left
    @page_current = 2 #get current page from student
    @page_current =  @page_current - 1

    render "dashboard/page1"
  end


end
