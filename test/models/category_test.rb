require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  test "should have necessary required validators" do
    category = Category.new
    assert_not category.valid?
    assert_equal [:main_category, :name], category.errors.keys
  end



#debug
  test "Category should have subcategory" do
  	cat = Category.create(name: "Cat 1", description: "Desc 1", main_category_id: MainCategory.first.id)
  	subcat = cat.create_sub_category(name: "Test sub 1", description: "Test sub description 1")
  	assert_equal subcat, cat.sub_categories.first
	end

end
