class HomeControllerTest < ActionController::TestCase
  
  test "should get index" do
    get(:index)
    assert_response :success
    assert_not_nil assigns(:home_props)
  end

  test "should get find_article" do
  end

end