class Like < ApplicationRecord
    validates :user_id, uniqueness: {scope: :listing_id}

    belongs_to :user
    belongs_to :listing
end
