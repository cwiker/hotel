class BookingSerializer < ActiveModel::Serializer
  attributes :id, :checkin_date, :checkout_date, :guest, :total
  has_one :user
  has_one :room
end
