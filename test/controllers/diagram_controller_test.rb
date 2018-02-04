require 'test_helper'

class DiagramControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get diagram_index_url
    assert_response :success
  end

  test "should get save" do
    get diagram_save_url
    assert_response :success
  end

end
