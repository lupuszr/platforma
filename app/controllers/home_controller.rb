class HomeController < ApplicationController

  def index
    #TODO write a method inside category or MainCategory model which join the main categories
    #with the sub ones
    #categories = MainCategory.all.map{ |main| {"#{main.name}":main.categories}}

    @home_props = { mainCategories: MainCategory.all, categories: Category.all }
  end

  #TODO handle when there is no article
  def find_article
    @articles = Article.fuzzy_search(params[:content]).filter(filtering_params).limit(5)
  	render json: @articles
  end

  private

  def filtering_params
    params.slice(:min_price, :max_price)
  end
end
