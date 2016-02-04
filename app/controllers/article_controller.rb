class ArticleController < ApplicationController
  before_action :authenticate_user!, except: [:show, :index]
  before_action :shop_owner,
                except: [:show, :index, :upload_images,
                         :get_categories, :get_sub_categories]

  def new
  end

  def index
    @articles = Shop.find(params[:shop_id]).articles.all
  end

  def edit
    @article = Article.find(params[:id])
    render json: @article
  end

  def update
  end

  def create
    @article = current_user.shop.articles.create_with_categories(create_params)
    puts @article.errors.full_messages
    render json: @article
  end

  def destroy
  end

  def show
    @article = Article.find(params[:id])
  end

  def categories
    render json: Category.top_categories(params[:main_category_id])
  end

  def sub_categories
    render json: Category.sub_categories(params[:category_id])
  end

  protected

  def create_params
    #ActionController::Parameters.new(shop_id: current_user.shop.id)
    #  .merge(params)
      params.permit(
        :name, :description, :price_cents,
        :category_id, :sub_category_id,
        :img_0, :img_1, :img_2, :img_3, :img_4,
        :user_id
      )
  end
end
