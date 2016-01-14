require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test "should have necessary required validators" do
    article = Article.new
    assert_not article.valid?
    assert_equal [:price, :price_money, :shop, :name], article.errors.keys
  end 
end
