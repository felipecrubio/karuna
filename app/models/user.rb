class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :bookings
  has_many :projects, through: :bookings
  has_many :messages
  has_one_attached :photo

  def full_name
    "#{first_name} #{last_name}"
  end

  def status_count
    self.bookings.map do |booking|
      booking.status
    end
  end
end
