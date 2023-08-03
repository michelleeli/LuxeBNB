json.listings({})

json.listings do
    @listings.each do |listing|
        json.set! listing.id do 
            json.extract! listing, :id, :title, :address, :city, :state, :price, :country
            # :num_bed, :num_bath, :num_bedroom, :host_id, :max_guests, :description, :lat, :lng,
            # :self_checkin, :wifi, :air_condition, :pets, :tv, :parking, :washer, :kitchen
            # json.host listing.host.first_name
            json.avg_rating listing.reviews.average(:rating)    
            json.photoUrl listing.images.attached? ? listing.images[0].url : nil
            json.tags listing.tags.pluck(:name)
        end 
    end 
end 