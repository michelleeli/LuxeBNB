# == Schema Information
#
# Table name: listings
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  address     :string           not null
#  city        :string           not null
#  state       :string           not null
#  num_bedroom :integer          not null
#  num_bed     :integer          not null
#  num_bath    :integer          not null
#  max_guests  :integer          not null
#  price       :integer          not null
#  host_id     :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Listing < ApplicationRecord
    validates :title, :description, :city, :state, :num_bedroom, :num_bath, :num_bed, :max_guests, :price, presence: true
    validates :address, presence: true, uniqueness: true

    belongs_to :host,
        primary_key: :id, 
        foreign_key: :host_id,
        class_name: :User

end
