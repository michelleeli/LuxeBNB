# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  cleanlilness  :integer          not null
#  communication :integer          not null
#  check_in      :integer          not null
#  accuracy      :integer          not null
#  location      :integer          not null
#  value         :integer          not null
#  rating        :float            not null
#  listing_id    :bigint           not null
#  user_id       :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Review < ApplicationRecord
    validates :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :rating, :user_id, :listing_id, presence: true
    validates :body, length: {in: 1..1500}
    validates :user_id, uniqueness: {scope: :listing_id}
    
    belongs_to :user
    belongs_to :listing
end
