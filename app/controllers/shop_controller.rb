class ShopController < ApplicationController
  before_action :authenticate_user!, :except => :show
  before_action :shop_owner, :except => [:show, :new]

  def show
    @shop = Shop.find_by_name(params[:id])
    if @shop.nil?
      render plain: "No such shop maybe you should start a new one"
    end

  end

  def index
  end

  def new
    @shop_props = { countries: Shop.countries, languages: Shop.languages, currencies: Shop.currencies, mainCategories: MainCategory.all}
  end

  def create
    @shop = Shop.new(shop_params)
    if(@shop.save)
      create_articles(@shop)
      render json: @shop
    end
  end

  def destroy
  end

  def edit
  end

  def update
  end

  def available
    render json: Shop.name_available?(params[:name])
  end

  protected 

 

  def shop_params
    additional_params = ActionController::Parameters.new(user_id: current_user.id)
    additional_params.merge(params).permit(:name, :language, :currency, :country, :logo_url, :hover_url, :user_id)
  end

  def article_params(shop)
    additional_params = ActionController::Parameters.new(shop_id: shop)
  end


  def create_articles(shop)
    #params = ActionController::Parameters.new(articles: [{name:"test1",price:1,description:"pina"},{name:"test2",price:2,description:"dsdss"}]

    articles = params.require(:articles).map { |article|
      article_hash = {}
      article_hash[:name] = article[:name]
      article_hash[:price] = article[:price]
      article_hash[:description] = article[:description]
      article_hash[:shop_id] = shop.id

      article_hash
    }

    shop.articles.create(articles)
  end

end
