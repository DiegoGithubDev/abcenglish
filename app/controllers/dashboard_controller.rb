class DashboardController < ApplicationController
  before_action :authenticate_student!
  MAX_PAGE_BOOK1=100
  MIX_PAGE_BOOKS=1
  def index
    $page_current= current_student.current_page
  end

  def save
  end

  def book_container
  end


  def right
    if $page_current.to_i < MAX_PAGE_BOOK1
      $page_current = $page_current.to_i + 1
    end
    render "dashboard/page#{$page_current}"
  end

  def left
    if $page_current.to_i>MIX_PAGE_BOOKS
      $page_current =  $page_current.to_i - 1
    end
    render "dashboard/page#{@page_current}"
  end


end
