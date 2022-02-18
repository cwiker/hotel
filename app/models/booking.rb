class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :room

  validates :user_id, :room_id, :checkin_date, :checkout_date, :guest, presence: true
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 1224adcb9fe137e1e2e2804eeac0e76b4ab3ba72
  #want to calculate price based on num of days
  # def stay
  #   binding.pry
  #   booking.where(:checkin_date.jd...:checkout_date.jd).count
  #   (:checkin_date.jd...:checkout_date.jd).to_a.size
  # end

  def stay
<<<<<<< HEAD
=======
  
   def stay
>>>>>>> ba140580aa4170c782e80436f08a64065d6fc3cd
=======

  
   def stay

>>>>>>> 1224adcb9fe137e1e2e2804eeac0e76b4ab3ba72
    #binding.pry
    t = checkout_date - checkin_date
    t/60/60/24
  end

  def total
    self.stay * room.price
  end
<<<<<<< HEAD
<<<<<<< HEAD
  
  

=======
>>>>>>> ba140580aa4170c782e80436f08a64065d6fc3cd
=======

>>>>>>> 1224adcb9fe137e1e2e2804eeac0e76b4ab3ba72
end
