# 3.times do
#   user = User.create!(
#     username: Faker::Internet.username(specifier: 6..12),
#     email: Faker::Internet.email,
#     password: Faker::Internet.password
#   )

#   3.times do
#     item = Item.create!(
#       user: user,
#       name: Faker::Vehicle.make_and_model,
#       category: 'Vehicles',
#       price: Faker::Number.between(from: 5000, to: 40_000),
#       description: Faker::Lorem.paragraphs.join("\n")
#     )
#     item.image.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
#   end
#   3.times do
#     item = Item.create!(
#       user: user,
#       name: Faker::Camera.brand_with_model,
#       category: 'Electronics & Media',
#       price: Faker::Number.between(from: 300, to: 2000),
#       description: Faker::Lorem.paragraphs.join("\n")
#     )
#     item.image.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
#   end
#   3.times do
#     item = Item.create!(
#       user: user,
#       name: Faker::Game.title,
#       category: 'Toys, Games & Hobbies',
#       price: Faker::Number.between(from: 5, to: 60),
#       description: Faker::Lorem.paragraphs.join("\n")
#     )
#     item.image.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
#   end
# end

# 1.times do
#   user = User.create!(
#     username: Faker::Internet.username(specifier: 6..12),
#     email: Faker::Internet.email,
#     password: Faker::Internet.password
#   )

#   item = Item.create!(
#     user:,
#     name: 'Ford F150',
#     category: 'Vehicles',
#     price: Faker::Number.between(from: 5000, to: 40_000),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/truck.jpeg'), filename: 'truck.jpeg')

#   item = Item.create!(
#     user:,
#     name: 'Fuji xt30',
#     category: 'Electronics & Media',
#     price: Faker::Number.between(from: 300, to: 2000),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/fuji-xt30.webp'), filename: 'fuji-xt30.webp')

#   item = Item.create!(
#     user:,
#     name: 'stuffed monkey',
#     category: 'Baby & Kids',
#     price: Faker::Number.between(from: 5, to: 10),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/monkey.webp'), filename: 'monkey.webp')
# end

# 1.times do
#   user = User.create!(
#     username: Faker::Internet.username(specifier: 6..12),
#     email: Faker::Internet.email,
#     password: Faker::Internet.password
#   )

#   item = Item.create!(
#     user:,
#     name: 'Wood Bat',
#     category: 'Sports & Outdoors',
#     price: Faker::Number.between(from: 20, to: 60),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/baseball-bat.webp'), filename: 'baseball-bat.webp')

#   item = Item.create!(
#     user:,
#     name: 'dino car',
#     category: 'Baby & Kids',
#     price: Faker::Number.between(from: 20, to: 40),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/dino-car.webp'), filename: 'dino-car.webp')

#   item = Item.create!(
#     user:,
#     name: 'Lego Set',
#     category: 'Baby & Kids',
#     price: Faker::Number.between(from: 5, to: 10),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/legos.webp'), filename: 'legos.webp')
# end

# 1.times do
#   user = User.create!(
#     username: Faker::Internet.username(specifier: 6..12),
#     email: Faker::Internet.email,
#     password: Faker::Internet.password
#   )

#   item = Item.create!(
#     user:,
#     name: 'Iphone 11',
#     category: 'Electronics & Media',
#     price: Faker::Number.between(from: 200, to: 800),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/iphone-11.webp'), filename: 'iphone-11.webp')

#   item = Item.create!(
#     user:,
#     name: 'Iphone 11 pro',
#     category: 'Electronics & Media',
#     price: Faker::Number.between(from: 200, to: 800),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/iphone-11-pro.webp'), filename: 'iphone-11-pro.webp')

#   item = Item.create!(
#     user:,
#     name: 'stuffed monkey',
#     category: 'Baby & Kids',
#     price: Faker::Number.between(from: 5, to: 10),
#     description: Faker::Lorem.paragraphs.join("\n")
#   )
#   item.image.attach(io: File.open('app/javascript/assets/monkey.webp'), filename: 'monkey.webp')
# end

1.times do
  user = User.create!(
    username: Faker::Internet.username(specifier: 6..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  item = Item.create!(
    user:,
    name: 'Ford F150',
    category: 'Vehicles',
    price: Faker::Number.between(from: 5000, to: 40_000),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/truck.jpeg'), filename: 'truck.jpeg')

  item = Item.create!(
    user:,
    name: 'Canon eos5D',
    category: 'Electronics & Media',
    price: Faker::Number.between(from: 300, to: 2000),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/canon-eos50.webp'), filename: 'canon-eos50.webp')

  item = Item.create!(
    user:,
    name: 'baby playset',
    category: 'Baby & Kids',
    price: Faker::Number.between(from: 5, to: 10),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/playset.webp'), filename: 'playset.webp')
end

1.times do
  user = User.create!(
    username: Faker::Internet.username(specifier: 6..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  item = Item.create!(
    user:,
    name: 'tent',
    category: 'Sports & Outdoors',
    price: Faker::Number.between(from: 20, to: 60),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/tent.webp'), filename: 'tent.webp')

  item = Item.create!(
    user:,
    name: 'Binoculars',
    category: 'Sports & Outdoors',
    price: Faker::Number.between(from: 20, to: 60),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/binoculars.webp'), filename: 'binoculars.webp')

  item = Item.create!(
    user:,
    name: 'Lego Set',
    category: 'Baby & Kids',
    price: Faker::Number.between(from: 5, to: 10),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/legos.webp'), filename: 'legos.webp')
end

1.times do
  user = User.create!(
    username: Faker::Internet.username(specifier: 6..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  item = Item.create!(
    user:,
    name: 'Iphone 6',
    category: 'Electronics & Media',
    price: Faker::Number.between(from: 200, to: 800),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/iphone-6.webp'), filename: 'iphone-6.webp')

  item = Item.create!(
    user:,
    name: 'dog toy',
    category: 'Pet Supplies',
    price: Faker::Number.between(from: 200, to: 800),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/dog-toy.webp'), filename: 'dog-toy.webp')

  item = Item.create!(
    user:,
    name: 'Shovel',
    category: 'Home & Garden',
    price: Faker::Number.between(from: 20, to: 60),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/shovel.webp'), filename: 'shovel.webp')

  item = Item.create!(
    user:,
    name: 'WeedWacker',
    category: 'Home & Garden',
    price: Faker::Number.between(from: 20, to: 60),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/weedwacker.webp'), filename: 'weedwacker.webp')
end



# -------------------------------------------------------------


1.times do
  user = User.create!(
    username: Faker::Internet.username(specifier: 6..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  item = Item.create!(
    user:,
    name: 'Wedding Candy',
    category: 'Wedding',
    price: Faker::Number.between(from: 200, to: 800),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/wedding.webp'), filename: 'wedding.webp')

  item = Item.create!(
    user:,
    name: 'Wedding Dress',
    category: 'Wedding',
    price: Faker::Number.between(from: 200, to: 800),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/dress.webp'), filename: 'dress.webp')

  item = Item.create!(
    user:,
    name: 'Wedding Candles',
    category: 'Wedding',
    price: Faker::Number.between(from: 200, to: 800),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/candle.webp'), filename: 'candle.webp')

  item = Item.create!(
    user:,
    name: 'Blow Dryer',
    category: 'Health & Beauty',
    price: Faker::Number.between(from: 200, to: 800),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/blowdryer.webp'), filename: 'blowdryer.webp')

  item = Item.create!(
    user:,
    name: 'Unique Vase',
    category: 'Collectibles & Art',
    price: Faker::Number.between(from: 20, to: 60),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/collectible.webp'), filename: 'collectible.webp')
end

1.times do
  user = User.create!(
    username: Faker::Internet.username(specifier: 6..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )

  item = Item.create!(
    user:,
    name: 'Spider-Man Miles Morales',
    category: 'Toys, Games & Hobbies',
    price: Faker::Number.between(from: 20, to: 60),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/spiderman.webp'), filename: 'spiderman.webp')

  item = Item.create!(
    user:,
    name: 'Running Shoes',
    category: 'Clothing, Shoes & Accessories',
    price: Faker::Number.between(from: 200, to: 800),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/runningshoes.webp'), filename: 'runningshoes.webp')

  item = Item.create!(
    user:,
    name: 'Athletic Shoes',
    category: 'Clothing, Shoes & Accessories',
    price: Faker::Number.between(from: 20, to: 60),
    description: Faker::Lorem.paragraphs.join("\n")
  )
  item.image.attach(io: File.open('app/javascript/assets/athleticshoes.webp'), filename: 'athleticshoes.webp')
end