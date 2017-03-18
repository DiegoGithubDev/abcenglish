class StudentCardsController < ApplicationController
  before_action :set_student_card, only: [:show, :edit, :update, :destroy]

  # GET /student_cards
  # GET /student_cards.json
  def index
    @student_cards = StudentCard.all
  end

  # GET /student_cards/1
  # GET /student_cards/1.json
  def show
  end

  # GET /student_cards/new
  def new
    @student_card = StudentCard.new
  end

  # GET /student_cards/1/edit
  def edit
  end

  # POST /student_cards
  # POST /student_cards.json
  def create
    @student_card = StudentCard.new(student_card_params)
    render :index
   / respond_to do |format|
      if @student_card.save
        format.html { redirect_to @student_card, notice: 'Student card was successfully created.' }
        format.json { render :show, status: :created, location: @student_card }
      else
        format.html { render :new }
        format.json { render json: @student_card.errors, status: :unprocessable_entity }
      end
    end/
  end

  # PATCH/PUT /student_cards/1
  # PATCH/PUT /student_cards/1.json
  def update
    respond_to do |format|
      if @student_card.update(student_card_params)
        format.html { redirect_to @student_card, notice: 'Student card was successfully updated.' }
        format.json { render :show, status: :ok, location: @student_card }
      else
        format.html { render :edit }
        format.json { render json: @student_card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /student_cards/1
  # DELETE /student_cards/1.json
  def destroy
    @student_card.destroy
    respond_to do |format|
      format.html { redirect_to student_cards_url, notice: 'Student card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def register

  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student_card
      @student_card = StudentCard.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def student_card_params
      params.require(:student_card).permit(:user_name, :password)
    end
end
