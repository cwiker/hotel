class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.datetime :checkin_date
      t.datetime :checkout_date
      t.string :guest
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :room

      t.timestamps
    end
  end
end
