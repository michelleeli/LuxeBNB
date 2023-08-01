# == Schema Information
#
# Table name: listing_tags
#
#  id         :bigint           not null, primary key
#  listing_id :bigint
#  tag_id     :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ListingTag < ApplicationRecord
    validates :tag_id, uniqueness: {scope: :listing_id}

    belongs_to :listing
    belongs_to :tag
end
