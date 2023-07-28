# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all
    Listing.destroy_all
    Reservation.destroy_all
    Review.destroy_all
  
    puts "Deleting Active Storage attachments and blobs..."
    ActiveStorage::Attachment.delete_all
    ActiveStorage::Blob.delete_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!("users")
    ApplicationRecord.connection.reset_pk_sequence!("listings")
    ApplicationRecord.connection.reset_pk_sequence!("reservations")
    ApplicationRecord.connection.reset_pk_sequence!("reviews")
    ApplicationRecord.connection.reset_pk_sequence!("active_storage_attachments")
    ApplicationRecord.connection.reset_pk_sequence!("active_storage_blobs")
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
        first_name: "Demo",
        last_name: "User",
        email: "demouser@gmail.com",
        password: "password"
    )
  
    # More users
    10.times do 
      User.create!({
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    Bench.create!({
      title: 'Manhattan Movie Bench',
      description: 'View of Queensborough bridge and water',
      price: 30,
      seating:3,
      lng:40.759008811124424,
      lat:-73.95902392836702
    })
  
      Bench.create!({
      title: 'Fun Bench',
      description: 'fun!',
      price: 40,
      seating: 69,
      lng: 40.75684736081709, 
      lat: -73.98310473666788
    })
  
      Bench.create!({
      title: 'Ok bench',
      description: 'its ok',
      price: 10,
      seating: 13,
      lng: 40.66034195637639,
      lat: -73.96890217847232
    })
  
      Bench.create!({
      title: 'Nice Bench',
      description: 'nice!',
      price: 52,
      seating: 5,
      lng: 40.73699414100244, 
      lat: -73.99060733097531,
    })
  
      Bench.create!({
      title: 'Cool Bench',
      description: 'cool!',
      price: 40,
      seating: 6,
      lng:40.75487271153465, 
      lat: -73.98374088713236,
    })
  
      Bench.create!({
      title: 'Ugly bench',
      description: 'ew',
      price: 10,
      seating: 1,
      lng: 40.73198524677008, 
      lat: -73.99730826764701,
    })
  
  
    puts "Done!"
  end


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
    host_id: 14,
    self_checkin: true, 
    wifi: true, 
    air_condition: true, 
    pets: false, 
    tv: true, 
    parking: false, 
    washer: false, 
    kitchen: true
)

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
    host_id: 15,
    self_checkin: true, 
    wifi: true, 
    air_condition: true, 
    pets: true, 
    tv: true, 
    parking: false, 
    washer: false, 
    kitchen: true)

mansion1 = Listing.create!(
    title: "Beachside Hamptons Estate",
    address: "67 Hither Lane",
    description: "This world class estate is located in the estate section of East Hampton Village South on highly coveted Hither Lane proximate to ocean beaches, the Maidstone Club, restaurants, shopping and cafes.",
    city: "East Hampton",
    state: "New York",
    num_bedroom: 6,
    num_bath: 7,
    num_bed: 8,
    max_guests: 13,
    price: 1875,
    host_id: 14,
    self_checkin: true, 
    wifi: true, 
    air_condition: true, 
    pets: true, 
    tv: true, 
    parking: true, 
    washer: true, 
    kitchen: true
)

mansion2 = Listing.create!(
    title: "Celebrity Estate in heart of Brentwood",
    address: "615 North Tigertail Road",
    description: "Extending over two private and serene acres, this sprawling mostly one-story ranch home is a one-of-a-kind magical sanctuary.",
    city: "Los Angeles",
    state: "California",
    num_bedroom: 5,
    num_bath: 6,
    num_bed: 7,
    max_guests: 12,
    price: 2300,
    host_id: 15,
    self_checkin: true, 
    wifi: true, 
    air_condition: true, 
    pets: true, 
    tv: true, 
    parking: true, 
    washer: true, 
    kitchen: true
)
