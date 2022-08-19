class ItemsController < ApplicationController

  def userindex
    items = current_user.items.all
    render json: items
  end

  def index 
    items = Item.all
    render json: items
end

def show
  item = Item.find(params[:id])
  render json: item
end

def logged_in
  if current_user
      render json: {
          logged_in: true,
          user: current_user        }
  else 
      render json: {
          logged_in: false
      }
  end
end


def create
    item = current_user.items.create(item_params)
    if item.valid? 
        render json: item
    else
    render json: item.errors, status: 422

    end
end

def update
    item = Item.find(params[:id])
    item.update(item_params)
    render json: item
end

 def destroy
    item = Item.find(params[:id])
    if current_user.id == item.user_id
      item.destroy
    else
      head 401
    end
  end

private
def item_params
    params.require(:item).permit(:name, :category, :price, :description)
end
end
