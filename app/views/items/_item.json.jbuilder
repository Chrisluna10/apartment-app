json.extract! item, :id, :name, :category, :price, :description, :user_id, :created_at, :updated_at
json.url item_url(item, format: :json)
