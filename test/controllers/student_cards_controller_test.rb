require 'test_helper'

class StudentCardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student_card = student_cards(:one)
  end

  test "should get index" do
    get student_cards_url
    assert_response :success
  end

  test "should get new" do
    get new_student_card_url
    assert_response :success
  end

  test "should create student_card" do
    assert_difference('StudentCard.count') do
      post student_cards_url, params: { student_card: { password: @student_card.password, user_name: @student_card.user_name } }
    end

    assert_redirected_to student_card_url(StudentCard.last)
  end

  test "should show student_card" do
    get student_card_url(@student_card)
    assert_response :success
  end

  test "should get edit" do
    get edit_student_card_url(@student_card)
    assert_response :success
  end

  test "should update student_card" do
    patch student_card_url(@student_card), params: { student_card: { password: @student_card.password, user_name: @student_card.user_name } }
    assert_redirected_to student_card_url(@student_card)
  end

  test "should destroy student_card" do
    assert_difference('StudentCard.count', -1) do
      delete student_card_url(@student_card)
    end

    assert_redirected_to student_cards_url
  end
end
