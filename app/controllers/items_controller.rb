class ItemsController < ApplicationController
  def index 
    items = Item.all
    render json: items
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

private
def item_params
    params.require(:item).permit(:name, :category, :price, :description)
end
end
