class HomeController < ApplicationController

  def index
    #categories = MainCategory.all.map{ |main| {"#{main.name}":main.categories}}

    @home_props = { mainCategories: MainCategory.all, categories: Category.all }
  end

  def find_article
  	articles = Article.find_by_fuzzy_name(params[:content]).take(5)

  	render json: articles
  end
end
