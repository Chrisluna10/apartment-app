class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :name, :category, :price, :description, :user_id, :username, :image_url, :formatted_time, :user_created

  def username
    object.user.username
  end

  def user_created
    object.user.created_at.strftime("%B %Y")
  end

  def formatted_time
    object.created_at.strftime("%B %d, %Y")
  end

  def image
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.image)
  end
end
