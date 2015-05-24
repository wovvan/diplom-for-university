require 'test_helper'

class ProfileControllerTest < ActionController::TestCase
  test "should get myprofile" do
    get :myprofile
    assert_response :success
  end

  test "should get profile" do
    get :profile
    assert_response :success
  end

end
