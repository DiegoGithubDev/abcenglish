class DashboardController < ApplicationController
  before_action :authenticate_student!
  def index
  end

  def save
  end

  def book_container
    render book_container
  end
end
