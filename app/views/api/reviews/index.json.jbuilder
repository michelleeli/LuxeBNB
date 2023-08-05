@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :rating, :user_id, :listing_id, :created_at
        json.user review.user.first_name
    end 
end 


