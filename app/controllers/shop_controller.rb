class ShopController < ApplicationController
  before_action :authenticate_user!, except: :show
  before_action :shop_owner, except: [:show, :new]

  def show
    @shop = Shop.find_by_name(params[:id])
    
    @shop_props = {
      shop: @shop,
      articles: @shop.articles
    }
    # TODO: Better error handling
    render plain: 'No such shop maybe you should start a new one' if @shop.nil?
  end

  def index
  end

  def new
    @shop_props = {
      countries: Shop.countries,
      languages: Shop.languages,
      currencies: Shop.currencies,
      mainCategories: MainCategory.all
    }

    # a shop without preset values is created
    # shop_completed is set to false
    if current_user.shop.nil?
      @shop = current_user.create_shop
    else
      @shop = current_user.shop
    end
  end

  def create
      current_user.shop.update_attributes(create_params)
      render json: "pina"
      # TODO: redirect
  end

  rescue_from ActiveRecord::RecordNotUnique do
      render json: "Shop exists"
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

  def create_params
    ActionController::Parameters.new(creation_completed: true)
      .merge(params)
      .permit(
        :name,
        :logo,
        :banner,
        :country,
        :language,
        :currency)
  end

  def shop_params
    additional = ActionController::Parameters.new(user_id: current_user.id)
    additional
      .merge(params)
      .permit(
        :name, :language,
        :currency, :country,
        :logo_url, :hover_url,
        :user_id)
  end

  def article_params(shop)
    ActionController::Parameters.new(shop_id: shop)
  end

  def create_articles(shop)
    articles = params.require(:articles)
               .map { |article|
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
