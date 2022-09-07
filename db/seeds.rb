10.times do
  user = User.create!(
    username: Faker::Internet.username(specifier: 6..12),
    email: Faker::Internet.email,
    password: Faker::Internet.password
  )
  

    3.times do
    item = Item.create!(
      user: user,
      name: Faker::Vehicle.make_and_model,
      category: "Vehicles",
      price: Faker::Number.between(from: 5000, to:40000),
      description: Faker::Lorem.paragraphs.join("\n")
      )
      item.image.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
    end
    3.times do
      item = Item.create!(
        user: user,
        name: Faker::Camera.brand_with_model,
        category: "Electronics & Media",
        price: Faker::Number.between(from: 300, to:2000),
        description: Faker::Lorem.paragraphs.join("\n")
        )
        item.image.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
      end
      3.times do
        item = Item.create!(
          user: user,
          name: Faker::Game.title,
          category: "Toys, Games & Hobbies",
          price: Faker::Number.between(from: 5, to:60),
          description: Faker::Lorem.paragraphs.join("\n")
          )
          item.image.attach(io: File.open('app/javascript/assets/no_image.webp'), filename: 'no_image.webp')
        end
end

