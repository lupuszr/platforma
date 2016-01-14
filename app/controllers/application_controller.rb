class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


protected

 def shop_owner
    if current_user.shop
      !!current_user.shop.id == params[:shop_id]
    else
      redirect_to new_shop_path
    end
  end


end
