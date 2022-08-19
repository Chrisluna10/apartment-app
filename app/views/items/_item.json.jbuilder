json.extract! item, :id, :name, :category, :price, :description, :user_id
json.url item_url(item, format: :json)
