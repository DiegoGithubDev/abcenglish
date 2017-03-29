require 'test_helper'

class PerfilControllerTest < ActionDispatch::IntegrationTest
  test "should get principal" do
    get perfil_principal_url
    assert_response :success
  end

end
