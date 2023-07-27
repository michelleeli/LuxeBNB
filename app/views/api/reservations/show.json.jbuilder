json.set! @reservation.id do
    json.extract! @reservation, :listing_id, :user_id, :start_date, :end_date, :guests, :total
end 