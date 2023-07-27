@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, :id, :title, :description, :address, :city, :state, :price, :num_bed, :num_bath, :num_bedroom, :max_guests, :host_id, :reservations
    end 
end 
