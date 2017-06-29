class CalculatorController < ApplicationController
  def index

  end

  def right
    @page_curent = 2 #get current page from student
    @page_curent =  @page_curent + 1

    render "dashboard/page2"
  end

  def left
    @page_curent = 2 #get current page from student
    @page_curent =  @page_curent - 1

    render "dashboard/page1"
  end
end
