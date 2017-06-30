class DashboardController < ApplicationController
  before_action :authenticate_student!
  MAX_PAGE_BOOK1=100
  MIX_PAGE_BOOKS=1
  def index
    @page_current= current_student.current_page
  end

  def save
  end

  def book_container
  end


  def right
    if @page_current<MAX_PAGE_BOOK1
      @page_current = @page_current + 1
    end
    render "dashboard/page#{@page_current}"
  end

  def left
    @page_current =  @page_current - 1
    render "dashboard/page1"
  end


end
