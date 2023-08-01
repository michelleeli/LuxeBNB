json.set! @review.id do
    json.extract! @review, :id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, :rating, :user_id, :listing_id
end 