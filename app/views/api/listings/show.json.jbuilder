json.set! @listing.id do
    json.extract! @listing, :id, :title, :address, :city, :state, :price, :num_bed, :num_bath, :num_bedroom, :host_id, :max_guests, :description, :reservations,
    :self_checkin, :wifi, :air_condition, :pets, :tv, :parking, :washer, :kitchen
    json.host @listing.host.first_name
end 