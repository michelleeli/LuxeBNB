# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


demoUser = User.create!(
    first_name: "Demo",
    last_name: "User",
    email: "demouser@gmail.com",
    password: "password"
)

house1 = Listing.create!(
    title: "Luxury 5 bedroom in New Jersey",
    address: "3157 31st",
    description: "The house is very spacious & bright. The best view of NYC skyscrapers are few steps from the apartment. Just a 20 minute commute from NYC",
    city: "New Bergen",
    state: "New Jersey",
    num_bedroom: 5,
    num_bath: 3,
    num_bed: 6,
    max_guests: 12,
    price: 712,
    host_id: 2)

house2 = Listing.create!( 
    title: "ARC Luxury Long Island City Apartment",
    address: "30-02 39th Ave",
    description: "ARC has been carefully curated for urbanites with an appreciation for design and authenticity, but what differentiates ARC is that the home experience doesn’t end within the four walls of the apartment.",
    city: "Queens",
    state: "New York",
    num_bedroom: 2,
    num_bath: 2,
    num_bed: 2,
    max_guests: 4,
    price: 899,
    host_id: 1)
