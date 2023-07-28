json.set! @reservation.id do
    json.extract! @reservation, :id, :user_id, :start_date, :end_date, :guests, :total
end 