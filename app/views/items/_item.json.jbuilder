json.extract! item, :id, :name, :image, :category, :price, :description, :user_id, :username
json.url item_url(item, format: :json)
