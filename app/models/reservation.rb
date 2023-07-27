# == Schema Information
#
# Table name: reservations
#
#  id         :bigint           not null, primary key
#  listing_id :bigint           not null
#  user_id    :bigint           not null
#  start_date :date             not null
#  end_date   :date             not null
#  guests     :integer          not null
#  total      :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Reservation < ApplicationRecord
    validates :listing_id, :user_id, :start_date, :end_date, :guests, :total, presence: true
    # validate :valid_dates

    belongs_to :listing
    belongs_to :user

    # def valid_dates
    #     reservations = Reservation.where(listing_id: listing_id)
    #     debugger
    #     if reservations.length > 0  
    #         reservations.each do |reservation| 
    #             if ((self.start_date  < reservation.end_date ) && (self.start_date > reservation.start_date)) ||
    #                 ((self.end_date  < reservation.end_date ) && (self.end_date > reservation.start_date))
    #                 errors.add(:reserved, "The chosen dates are no longer available")
    #             end 
    #         end 
    #     end
    # end 

end
