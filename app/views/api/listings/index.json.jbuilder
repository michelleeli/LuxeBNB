@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, :id, :title, :address, :city, :state, :price
    end 
end 
