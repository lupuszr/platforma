class HomeController < ApplicationController

  def index
    #TODO write a method inside category or MainCategory model which join the main categories
    #with the sub ones
    #categories = MainCategory.all.map{ |main| {"#{main.name}":main.categories}}

    @home_props = { mainCategories: MainCategory.all, categories: Category.all }
  end

  #TODO handle when there is no article
  def find_article
  	@articles = Article.find_by_fuzzy_name(params[:content]).take(5)
  	render json: @articles
  end

  #TODO attila implement
  # def find_article_by_category
  # end
end
