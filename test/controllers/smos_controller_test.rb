require 'test_helper'

class SmosControllerTest < ActionController::TestCase
  setup do
    @smo = smos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:smos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create smo" do
    assert_difference('Smo.count') do
      post :create, smo: {  }
    end

    assert_redirected_to smo_path(assigns(:smo))
  end

  test "should show smo" do
    get :show, id: @smo
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @smo
    assert_response :success
  end

  test "should update smo" do
    patch :update, id: @smo, smo: {  }
    assert_redirected_to smo_path(assigns(:smo))
  end

  test "should destroy smo" do
    assert_difference('Smo.count', -1) do
      delete :destroy, id: @smo
    end

    assert_redirected_to smos_path
  end
end
