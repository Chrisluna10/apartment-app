class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
  has_many :items
  # has_one_attached :avatar
  validates :username, uniqueness: true, presence: true, length: { in: 6..12 }
end
