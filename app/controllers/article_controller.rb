class ArticleController < ApplicationController

  before_action :authenticate_user!, :except => [:show, :index]
  before_action :shop_owner, :except => [:show, :index, :upload_images]

  def new
  end

  def index
    @article = Shop.find(params[:shop_id]).articles.all
  end

  def edit
  end

  def update
  end

  def create
    @article = current_user.shop.articles.create(params.permit(:name, :language, :currency, :country, :logo_url, :hover_url, :user_id))
  end

  def destroy
  end 

  def show
    @articles = Article.find(params[:id])
  end

  def get_categories
    render json: MainCategory.find(params[:main_category_id]).categories
  end

  def get_sub_categories
    render json: Category.find(params[:category_id]).sub_categories
  end

  def upload_images
    name = params[:file].original_filename
    
    #TODO cloudinary
    # directory_name = "public/uploads/" + params[:article_name]
    # Dir.mkdir(directory_name) unless File.exists?(directory_name)

    directory = "public"
    path = File.join(directory, name)
    File.open(path, "wb") { |f| f.write(params[:file].read) }
    render json: "ok"
  end
end