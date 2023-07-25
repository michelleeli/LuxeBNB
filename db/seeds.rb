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

demoUser2 = User.create!(
    first_name: "Demo2",
    last_name: "User",
    email: "demouser2@gmail.com",
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
    host_id: 6)

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
    host_id: 7)

mansion1 = Listing.create!(
    title: "ARC Luxury Long Island City Apartment",
    address: "67 Hither Lane",
    description: "This world class estate is located in the estate section of East Hampton Village South on highly coveted Hither Lane proximate to ocean beaches, the Maidstone Club, restaurants, shopping and cafes.",
    city: "East Hampton",
    state: "New York",
    num_bedroom: 6,
    num_bath: 7,
    num_bed: 8,
    max_guests: 13,
    price: 1875,
    host_id: 6
)

mansion2 = Listing.create!(
    title: "ARC Luxury Long Island City Apartment",
    address: "615 North Tigertail Road",
    description: "This world class estate is located in the estate section of East Hampton Village South on highly coveted Hither Lane proximate to ocean beaches, the Maidstone Club, restaurants, shopping and cafes.",
    city: "Los Angeles",
    state: "California",
    num_bedroom: 5,
    num_bath: 6,
    num_bed: 7,
    max_guests: 14,
    price: 2300,
    host_id: 7
)
