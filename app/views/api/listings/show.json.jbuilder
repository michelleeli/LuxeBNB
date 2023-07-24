json.listing do
    json.extract! @listing, :id, :address, :city, :state
end