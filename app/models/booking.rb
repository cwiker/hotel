class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :user_id, :room_id, :checkin_date, :checkout_date, :guest, presence: true
  #want to calculate price based on num of days
  # def stay
  #   binding.pry
  #   booking.where(:checkin_date.jd...:checkout_date.jd).count
  #   (:checkin_date.jd...:checkout_date.jd).to_a.size
  # end

  def stay
    #binding.pry
    t = checkout_date - checkin_date
    t/60/60/24
  end

  def total
    self.stay * room.price
  end
  
  

end
