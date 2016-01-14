class ShopControllerTest < ActionController::TestCase
  include Devise::TestHelpers

  def setup
    @request.env["devise.mapping"] = Devise.mappings[:user]
    sign_in User.first
  end

  test "should get shop" do
    get :show, {'id' => "Shop1"}
    assert_response :success
    assert_not_nil assigns(:shop)
  end

  test "should create shop" do
    post :create, {name: "TestShop", language:"en", currency:"USD", country:"USA", logo_url: "example.png", hover_url:"example.com", user_id: User.first.id, articles:[{name: "article1", description:"text description" , price: "11"},{name: "article2", description: "random description", price: "2000"}] }
    assert_response :success
    assert_not_nil assigns(:shop)
    
  end

  test "should allow only permited" do
    # x = post :create, {name: "TestShop", unpermitted:"random", currency: "USD" ,language:"en", country:"USA", logo_url: "example.png", hover_url:"example.com", user_id: User.first.id, articles:[{name: "article1", description:"text description" , price: "11"},{name: "article2", description: "random description", price: "2000", value: "number"}] }
    # puts response.body#assigns(:shop).errors.to_s
    # puts x.errors
    # ActiveRecord::UnknownAttributeError: unknown attribute 'unpermitted' for Shop.

  end

  test "should get new" do
    get :new
    assert_response :success
    assert_not_nil assigns(:shop_props)
  end

  test "should get new length ???" do
    get :new
    assert_equal assigns(:shop_props).length, 3
  end

  test "should not find store" do
     get :show, {'id' => ""}
     assert_equal response.body, "No such shop maybe you should start a new one"
  end

  test "Shop name exists" do
    get :available, { name: Shop.first.name}
    assert_equal "false", response.body
  end

  test "Shop name is available" do
    get :available, { name: "NonExistingShopName"}
    assert_equal "true", response.body
  end


end