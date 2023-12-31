

json.listing do 
    json.set! @listing.id do
        json.extract! @listing, :id, :title, :address, :city, :state, :price, :num_bed, :num_bath, :num_bedroom, :host_id, :max_guests, :description, :country, :lat, :lng,
        :self_checkin, :wifi, :air_condition, :pets, :tv, :parking, :washer, :kitchen
        json.host @listing.host.first_name
        json.avg_rating @listing.reviews.average(:rating)
        json.avg_clean @listing.reviews.average(:cleanliness)
        json.avg_comm @listing.reviews.average(:communication)
        json.avg_acc @listing.reviews.average(:accuracy)
        json.avg_loc @listing.reviews.average(:location)
        json.avg_val @listing.reviews.average(:value)
        json.avg_checkin @listing.reviews.average(:check_in)
        json.review_ids @listing.reviews.pluck(:id)
        json.reservation_ids @listing.reservations.pluck(:id)
        json.photoUrl @listing.images.attached? ? @listing.images[0].url : nil
        json.photo2Url @listing.images.attached? ? @listing.images[1].url : nil
        json.photo3Url @listing.images.attached? ? @listing.images[2].url : nil
        json.photo4Url @listing.images.attached? ? @listing.images[3].url : nil
        json.photo5Url @listing.images.attached? ? @listing.images[4].url : nil
        json.tags @listing.tags.pluck(:name)
    end 
end 

json.reviews do
    @listing.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :rating, :user_id, :listing_id, :created_at
            json.user review.user.first_name
        end 
    end 
end 

if current_user
    json.reservations do 
        current_user.reservations.each do |reservation|
            json.set! reservation.id do 
                json.extract! reservation, :id, :user_id, :start_date, :end_date, :guests, :total, :listing_id
            end 
        end 
    end 
end 
