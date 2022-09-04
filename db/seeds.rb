# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  {
    username: 'joerandom1',
    email: 'testing@test.com',
    password: 'testing123',
    password_confirmation: 'testing123'
  },
  {
    username: 'joerandom2',
    email: 'testing@test123.com',
    password: 'testing123',
    password_confirmation: 'testing123'
  },
  {
    username: 'joerandom3',
    email: 'test@test.com',
    password: 'testing123',
    password_confirmation: 'testing123'
  }
]

users.each do |attribute|
  User.create attribute
end

items = [
  {
    name: '123 Street',
    category: 'SD',
    price: 'CA',
    description: 'Joe',
  },
  {
    name: '123 Street',
    category: 'SD',
    price: 'CA',
    description: 'Joe',
  }, 
  {
    name: '123 Street',
    category: 'SD',
    price: 'CA',
    description: 'Joe',
  },
  {
    name: '123 Street',
    category: 'SD',
    price: 'CA',
    description: 'Joe',
  },
]
end
