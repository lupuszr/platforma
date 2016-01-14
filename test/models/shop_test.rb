require 'test_helper'

class ShopTest < ActiveSupport::TestCase
  
  test "should have necessary required validators" do
    shop = Shop.new
    assert_not shop.valid?
    assert_equal [:user, :name, :language, :country, :currency], shop.errors.keys
  end  

  test "should check if shop name already exists" do
    assert Shop.name_available?("AnAvailableShopName")
    assert_not Shop.name_available?(Shop.first.name)
    assert_not Shop.name_available?("")
  end

  test "currency should have length 3" do
    shop = Shop.new({name: "TestShop", language:"en", country:"USA", currency:"USSR", logo_url: "example.png", hover_url:"example.com", user_id: User.first.id })

    assert_not shop.valid?
    assert_equal [:currency], shop.errors.keys
    assert_equal ["is the wrong length (should be 3 characters)"], shop.errors.values.first
  end
end
