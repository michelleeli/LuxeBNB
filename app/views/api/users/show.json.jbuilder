json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :reservations
    json.reservationIds @user.reservations.pluck(:id)
    json.likedListingIds @user.likes.pluck(:listing_id)
end