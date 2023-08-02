@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, :id, :title, :description, :address, :city, :state, :price, :num_bed, :num_bath, :num_bedroom, :max_guests, :host_id, :reservations, :country, :lng, :lat
        json.avg_rating listing.reviews.average(:rating)
        json.host listing.host.first_name
        json.photoUrl listing.images.attached? ? listing.images[0].url : nil
        json.photo2Url listing.images.attached? ? listing.images[1].url : nil
        json.photo3Url listing.images.attached? ? listing.images[2].url : nil
        json.photo4Url listing.images.attached? ? listing.images[3].url : nil
        json.photo5Url listing.images.attached? ? listing.images[4].url : nil
        json.tags listing.tags.pluck(:name)
    end 
end 

