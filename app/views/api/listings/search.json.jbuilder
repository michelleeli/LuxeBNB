json.listings({})

json.listings do
    @listings.each do |listing|
        json.set! listing.id do 
            json.extract! listing, :id, :title, :address, :city, :state, :price, :country
            json.avg_rating listing.reviews.average(:rating)    
            json.photoUrl listing.images.attached? ? listing.images[0].url : nil
            json.tags listing.tags.pluck(:name)
        end 
    end 
end 