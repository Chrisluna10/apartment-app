# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
  user = User.create!(
    username: Faker::Internet.username(specifier: 6..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )
  

    3.times do
    item = Item.create!(
      user: user,
      name: Faker::Lorem.words.join(""),
      category: "Electronics & Media",
      price: Faker::Number.between(from: 5, to:500),
      description: Faker::Lorem.paragraphs.join("\n")
      )
      @item.images.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
    end
    3.times do
      item = Item.create!(
        user: user,
        name: Faker::Lorem.words.join(""),
        category: "Home & Garden",
        price: Faker::Number.between(from: 5, to:500),
        description: Faker::Lorem.paragraphs.join("\n")
        )
        @item.images.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
      end
      3.times do
        item = Item.create!(
          user: user,
          name: Faker::Lorem.words.join(""),
          category: "Clothing, Shoes & Accessories",
          price: Faker::Number.between(from: 5, to:500),
          description: Faker::Lorem.paragraphs.join("\n")
          )
          @item.images.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
        end
end

# users.each do |attribute|
#   User.create attribute
# end

