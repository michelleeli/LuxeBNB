# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require  'open-uri'

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

    users = []

    demo_user = User.create!(
        first_name: "Demo",
        last_name: "User",
        email: "demouser@gmail.com",
        password: "password"
    )

    users << demo_user
  
    # More users
    10.times do 
      user = User.create!({
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
      users << user
    end

    puts "Creating listings..."

    def randomUser(users)
        i = rand(users.length)
        random_user = users[i]
        return random_user.id
    end 

    listings = []

    listing6 = Listing.create!(
        title: "The Charles",
        address: "1355 First Ave",
        description: "A townhouse in the sky, this world-class property features approximately 12,000 square feet of interior space expanding over four private floors, complimented by 1,500 square feet of terraces, which capture breathtaking 360-degree views. Conceptualized to provide the finest quality of design and artisanship, the layout of this property is notably perfect for both intimate experiences and grand scale entertainment. A work of art in and of itself, a distinguished staircase serves as the centerpiece of the home, adorned with a dramatic custom chandelier that spans all four floors and reflects the spectacular New York City skyline.",
        city: "New York",
        state: "New York",
        country: "United States",
        lat: 40.76850325660143,
        lng: -73.95597966088339,
        num_bedroom: 8,
        num_bath: 8,
        num_bed: 8,
        max_guests: 16,
        price: 3928,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: false, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true)

        # ["a", "b", "c", "d", "e"].forEach((char) => {
        #     listing6.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing6#{char}.png"), filename: "listing6#{char}")
        # })
        
        listing6.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing6.jpg"), filename: "listing6")

        listings << listing6

    listing8 = Listing.create!(
        title: "Pearl West",
        address: "245 Longbay Beach Drive",
        description: "Pearl West is one of three homes within the Pearls of Long Bay Estate. The perks at this luxury vacation rental have been set to overdrive for fun in the sun and pleasant repose. Get the rest and relaxation you deserve, next holiday, at this exclusive oceanfront property in the Turks and Caicos! The grounds at Pearl West include two swimming pools and a children’s wading pool. Or perhaps it’s time for a soothing soak in the therapeutic bubbles of the hot tub? Decked out for the consummate entertainer, you will also find the following: alfresco dining for eight, a pool bar, a Japanese teppanyaki cooking station, a barbecue, sun loungers, umbrellas, a beachside sound system and a children’s play set. The interiors of this elegant residence are equally impressive with a stunning home theater room with popcorn machine, cable television, an indoor/outdoor sound system and other divertissements including Netflix, Apple TV and a DVD/Blu-ray player. Your reservation includes housekeeping, and a private chef.",
        city: "Providenciales ",
        state: "La Altagracia",
        country: "Turks & Caicos Islands",
        lat: 21.787859953378494, 
        lng: -72.15381510208562,
        num_bedroom: 8,
        num_bath: 10,
        num_bed: 8,
        max_guests: 16,
        price: 7110,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true
    )
    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing8.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing8#{char}.png"), filename: "listing8#{char}")
    # })
    
    listing8.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing8.png"), filename: "listing8")

    listing2 = Listing.create!(
        title: "The Kellogg Doolittle House",
        address: "7263 Mt Shasta Ave",
        description: "This is the famous Kellogg Doolittle estate in Joshua Tree California. Created over 25 meticulous years, Kellogg Doolittle in Joshua Tree National Park is a marvel of the organic architecture movement. A residence that is so “one-of-a-kind,” nearly every element, inside and out, is handcrafted by architect Ken Kellogg and Master Craftsman John Vugrin. The masterpiece of organic architecture sits along the breathtaking landscape of Joshua Tree National Park, the location that lent itself as the ambitious vision and inspiration behind the design. Located on a quiet edge of Joshua Tree National Park, you have your private path into an un-trafficked section of the park, just steps from the front door. Take an easy drive to the main park entrance, start your exploration with a stroll through the Cholla Cactus Gardens, snap a few photos at Skull Rock, and hike the Hidden Valley Nature Trail; or stay at home, shut the world out, sit around the fire pit and wait for a chance to see the Milky Way in your exclusive dark sky view. If you're in the mood for city life, Palm Springs is an easy hour’s drive. ",
        city: "Joshua Tree",
        state: "California",
        country: "United States",
        lat: 34.12165013779743, 
        lng: -116.22418327467437,
        num_bedroom: 3,
        num_bath: 3,
        num_bed: 3,
        max_guests: 6,
        price: 6500,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true
    )

    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing2.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing2#{char}.png"), filename: "listing2#{char}")
    # })
    
    listing2.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing2.png"), filename: "listing2")

    listings << listing2

    listing9 = Listing.create!(
        title: "Villa Sha",
        address: "López Portillo 84, 77520 ",
        description: "This shoreside Cancún villa boasts an impressive, Aztec-inspired facade, with contoured white gates crowned by palm leaves and the pale Mexican sky. Spacious, bright, and evocatively-decorated rooms promise relaxed days, as the blue-green water of the Caribbean laps by the sea-level pool. The city’s fun-filled downtown and tranquil beach walks are all nearby. Picture-perfect Isla Mujeres is only a 15minute boat ride away.",
        city: "Cancún",
        state: "Quintana Roo",
        lat: 21.19571892424005, 
        lng: -86.80543108577477,
        country: "Mexico",
        num_bedroom: 6,
        num_bath: 6,
        num_bed: 13,
        max_guests: 16,
        price: 2988,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: false, 
        washer: false, 
        kitchen: true
    )
    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing9.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing9#{char}.png"), filename: "listing9#{char}")
    # })
    
    listing9.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing9.png"), filename: "listing9")

    listing10 = Listing.create!(
        title: "Villa El Nido",
        address: "Cam. de Camoján, 29602",
        description: "Perched on the foothills of Sierra Blanca, this Marbella mansion is an architectural masterpiece by renowned architect Joaquin Torres. Overlooking the Mediterranean Sea, this spacious villa celebrates its surroundings with lush greenery, ocean views, and loads of outdoor entertainment, including a tennis court. You’ll love relaxing in the pool, sauna, hot tub, and, if you’re brave, the cold bath.",
        city: "Marbella",
        state: "Andalucía",
        country: "Spain",
        lat: 36.518776198687256, 
        lng: -4.906358059227502,
        num_bedroom: 6,
        num_bath: 7,
        num_bed: 6,
        max_guests: 12,
        price: 13221,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true
    )
    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing10.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing10#{char}.png"), filename: "listing10#{char}")
    # })
    
    listing10.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing10.png"), filename: "listing10")

    listing7 = Listing.create!(
        title: "Villa Rosana",
        address: "C. Los Cocos, Punta Cana 23000",
        description: "Sleek minimalism meets wide opens skies at this seaside resort villa near the fairways of Punta Cana's gated community. Two stories are built wider than they are tall, opening the villa to the poolside terrace. Float in the pool, read in the gazebo, and breathe in the steam of the hot tub as stars pop into view. Beginner snorkelers will love the calm waters at the beach just a 5-minute walk away.",
        city: "Punta Cana",
        state: "La Altagracia",
        country: "Dominican Republic",
        lat: 18.530185576423897, 
        lng: -68.3699792153747,
        num_bedroom: 5,
        num_bath: 5,
        num_bed: 5,
        max_guests: 8,
        price: 1890,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: false, 
        tv: true, 
        parking: false, 
        washer: true, 
        kitchen: true
    )

    listing7.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing7.png"), filename: "listing7")
    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing7.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing7#{char}.png"), filename: "listing7#{char}")
    # })
    

    listing11 = Listing.create!(
        title: "Villa Korcula Diamond",
        address: "Žrnovo, 20275, Žrnovo",
        description: "Look out over dramatic mountain and sea views at this modern architectural masterpiece on the secluded island of Korcula in Croatia. Spend your afternoons lounging poolside, working on your tan from one of the custom designed sun chairs. At night, head 3 kilometers into downtown Korcula for dinner at one of their best seafood restaurants.",
        city: "Korčula",
        state: "Split Riviera",
        country: "Croatia",
        lat: 37.43575588583368, 
        lng: 25.35743248447285,
        num_bedroom: 5,
        num_bath: 6,
        num_bed: 7,
        max_guests: 10,
        price: 3636,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: false, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true
    )
    
    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing11.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing11#{char}.png"), filename: "listing11#{char}")
    # })

    listing11.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing11.png"), filename: "listing11")

    listing12 = Listing.create!(
        title: "Villa Santa Esmeralda",
        address: "Kounoupas, Mikonos 846 00",
        description: "Look out over dramatic mountain and sea views at this modern architectural masterpiece on the secluded island of Korcula in Croatia. Spend your afternoons lounging poolside, working on your tan from one of the custom designed sun chairs. At night, head 3 kilometers into downtown Korcula for dinner at one of their best seafood restaurants.",
        city: "Mikonos",
        state: "Mykonos",
        country: "Greece",
        lat: 37.436164391206226, 
        lng: 25.35737968536439,
        num_bedroom: 10,
        num_bath: 10,
        num_bed: 11,
        max_guests: 16,
        price: 16265,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true
    )

    listing12.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing12.png"), filename: "listing12")

    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing12.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing12#{char}.png"), filename: "listing12#{char}")
    # })
    
    listing1 = Listing.create!(
        title: "Beverly Hills Maison",
        address: "150 S El Camino Dr",
        description: "Inspired by the French countryside, this Beverly Hills residence exudes the ideal mix of modernity and charm. Canyon landscapes undulate beyond the soaring windows; inside, the home is drenched in natural light. Slip into the zero-edge pool whenever you need an instant refresh. Trees cast dappled shadows on the lavish yard. Access to shopping, sights, and restaurants are mere minutes away by car.",
        city: "Beverly Hills",
        state: "California",
        country: "United States",
        lat: 34.06555933016579, 
        lng: -118.39984194769319,
        num_bedroom: 5,
        num_bath: 4,
        num_bed: 6,
        max_guests: 12,
        price: 5231,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true
    )

    listing1.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing1.png"), filename: "listing1")

    # ["a", "b", "c", "d", "e"].forEach((char) => {
    #     listing1.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing1#{char}.png"), filename: "listing1#{char}")
    # })
    
    listings << listing1

    listing3 = Listing.create!(
        title: "Paradise Palms",
        address: "2916 Palm Blvd",
        description: "Settle into the rope swing on the balcony and sway while you drink your morning tea, gazing out over the ocean view from your vacation home on Isle of Palms. Feel like a swim in the Atlantic? The path is right before you, and it’s not long. After your swim, relax in a poolside sun lounger or stretch out in the hot tub. For dinner, drive into Charleston for some fresh seafood.",
        city: "Isle of Palms",
        state: "South Carolina",
        country: "United States",
        lat: 32.793147447812174,
        lng: -79.77196961063883,
        num_bedroom: 5,
        num_bath: 5,
        num_bed: 5,
        max_guests: 10,
        price: 2500,
        host_id: randomUser(users),
        self_checkin: true, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: true, 
        washer: true, 
        kitchen: true)

        # ["a", "b", "c", "d", "e"].forEach((char) => {
        #     listing3.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing3#{char}.png"), filename: "listing3#{char}")
        # })
        
        listing3.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing3.png"), filename: "listing3")

        listings << listing3



    listing4 = Listing.create!(
        title: "Waterline Square",
        address: "400 West 61st Street",
        description: "Spanning nearly five acres and built around a new 2.6-acre landscaped park, Waterline Square Luxury Rentals is the culmination of a thriving riverfront neighborhood 25 years in the making, where Midtown meets the Upper West Side.
        Residents will have a life that transcends expectations with over 100,000 square feet of sports, leisure, and lifestyle amenities including an indoor tennis court, squash court, soccer field, half-pipe skate park, 25m lap pool, kid’s pool, gardening studio, recording studio, art studio, and dog playground. Waterline Square will be the home of Empellón Taqueria by James Beard-nominated chef Alex Stupak, as well as Harry’s Table by Cipriani, a new food hall and culinary experience.",
        city: "New York",
        state: "New York",
        country: "United States",
        lat: 40.77356849441648, 
        lng: -73.99151041670282,
        num_bedroom: 3,
        num_bath: 2,
        num_bed: 4,
        max_guests: 5,
        price: 1498,
        host_id: randomUser(users),
        self_checkin: false, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: false, 
        washer: false, 
        kitchen: true)

        listing4.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing4.png"), filename: "listing4")

        # ["a", "b", "c", "d", "e"].forEach((char) => {
        #     listing4.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing4#{char}.png"), filename: "listing4#{char}")
        # })
        
        listings << listing4

    listing5 = Listing.create!(
        title: "Hudson Yards Luxury Complex",
        address: "530 West 30th Street",
        description: "Ideally located along the celebrated High Line and just steps from the culture and nightlife of West Chelsea and respite of Hudson River Park, One Hudson Yards offers a prime southern perch in New York’s most exciting new neighborhood, Hudson Yards. Built to exceed luxury condominium specifications, a Miele appliance package and breathtaking views of Thomas Heatherwick’s highly anticipated Vessel, the Hudson River, West Chelsea and downtown. The generous amenities suite includes an 82′ lap pool, spa, bowling alley and game room, basketball court, penthouse lounge and terrace, children’s playroom and a fitness center curated by Equinox.  ",
        city: "New York",
        state: "New York",
        country: "United States",
        lat: 40.75254071119162, 
        lng: -74.00247341855629,
        num_bedroom: 3,
        num_bath: 2,
        num_bed: 3,
        max_guests: 6,
        price: 1200,
        host_id: randomUser(users),
        self_checkin: false, 
        wifi: true, 
        air_condition: true, 
        pets: true, 
        tv: true, 
        parking: false, 
        washer: false, 
        kitchen: true)

        listing5.images.attach(io: File.open("/Users/michelleli/Desktop/LuxeBNB/app/assets/listing5.jpg"), filename: "listing5")
        
        # ["a", "b", "c", "d", "e"].forEach((char) => {
        #     listing5.images.attach(io: URI.open("https://luxebnb-seed.s3.us-east-2.amazonaws.com/listing5#{char}.png"), filename: "listing5#{char}")
        # })
        

        listings << listing5

    puts "Done!"

    puts "Creating reservations..."

    res1 = Reservation.create!(
        user_id: demo_user.id,
        listing_id: listing1.id,
        start_date: "2023-07-26", 
        end_date: "2023-07-29", 
        guests: 11, 
        total: 15693
    )

    res2 = Reservation.create!(
        user_id: demo_user.id,
        listing_id: listing2.id,
        start_date: "2023-08-10", 
        end_date: "2023-08-22", 
        guests: 5, 
        total: 78000
    )

    res3 = Reservation.create!(
        user_id: demo_user.id, 
        listing_id: listing3.id,
        start_date: "2023-09-17", 
        end_date: "2023-09-14", 
        guests: 8, 
        total: 7500
    )

    res4 = Reservation.create!(
        user_id: demo_user.id,
        listing_id: listing4.id,
        start_date: "2024-08-20",
        end_date: "2024-08-25",
        guests: 3,
        total: 7490
    )

    res5 = Reservation.create!(
        user_id: demo_user.id,
        listing_id: listing5.id,
        start_date: "2023-09-05",
        end_date: "2023-09-10",
        guests: 4,
        total: 5500
        )

    res6 = Reservation.create!(
        user_id: users[10].id,
        listing_id: listing3.id,
        start_date: "2022-10-01",
        end_date: "2022-10-07",
        guests: 6,
        total: 58800
        )

    

    puts "Done!"

    puts "Creating reviews"

    review1 = Review.create!(
        body: "This Airbnb exceeded our expectations! The host was incredibly thoughtful, leaving us a welcome basket with local treats and wine. The interior was beautifully decorated, and the attention to detail was impressive. The location was convenient, with plenty of restaurants and shops nearby. We highly recommend this place for a memorable stay!",
        cleanliness: 5, 
        communication: 5, 
        check_in: 5, 
        accuracy: 5, 
        location: 5, 
        value: 5, 
        rating: 5, 
        user_id: demo_user.id,
        listing_id: listing3.id
    )

    review2 = Review.create!(
        body: "This Airbnb was perfect for our family vacation. The host was incredibly accommodating, providing us with a crib and high chair for our baby. The location was great, close to family-friendly attractions and parks. The house was spacious, clean, and had a well-equipped kitchen. We felt right at home and would love to come back",
        cleanliness: 5, 
        communication: 5, 
        check_in: 5, 
        accuracy: 5, 
        location: 5, 
        value: 5, 
        rating: 5, 
        user_id: users[10].id,
        listing_id: listing3.id
    )

    review3 = Review.create!(
        body: "The pictures don't do this place justice! The Airbnb was stunning and had breathtaking views. The host was responsive and made sure we had everything we needed. The amenities were top-notch, and the bed was so comfortable. We enjoyed relaxing on the balcony and taking in the scenery. Highly recommend this place for a luxurious stay!",
        cleanliness: 5, 
        communication: 5, 
        check_in: 5, 
        accuracy: 5, 
        location: 5, 
        value: 5, 
        rating: 5, 
        user_id: users[3].id,
        listing_id: listing3.id
    )

   review4 = Review.create!(
        body: "An unforgettable experience, like stepping into a fairytale! The attention to detail in the decor was astounding. The host's hospitality was exceptional, and the gourmet kitchen made our stay even more enjoyable. We can't wait to return!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[4].id,
        listing_id: listing1.id
        )

    review5 = Review.create!(
            body: "A dream come true! The mansion is even more beautiful in person. The host was attentive and responsive to all our requests. The location was private and peaceful, perfect for a luxurious getaway.",
            cleanliness: 5,
            communication: 4,
            check_in: 5,
            accuracy: 5,
            location: 4,
            value: 4,
            rating: 4.6,
            user_id: users[5].id,
            listing_id: listing1.id
          )

    review6 = Review.create!(
        body: "Luxury at its finest! The mansion was immaculate, and the furnishings were of the highest quality. The host's attention to detail was evident throughout. The heated pool and hot tub were a fantastic addition. We enjoyed every moment of our stay!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[6].id,
        listing_id: listing2.id
      )

    review7 = Review.create!(
        body: "Paradise found! This home was a true escape from the hustle and bustle of city life. The host was accommodating and ensured we had everything we needed. We left feeling rejuvenated and relaxed!",
        cleanliness: 4,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 4,
        rating: 4.6,
        user_id: users[7].id,
        listing_id: listing2.id
      )

    review8 = Review.create!(
        body: "Not worth the price. The place was grand, but the furnishings were outdated. The host was distant and didn't respond promptly. The location was nice, but overall, we felt disappointed with our stay.",
        cleanliness: 3,
        communication: 2,
        check_in: 3,
        accuracy: 3,
        location: 4,
        value: 2,
        rating: 2.8,
        user_id: users[8].id,
        listing_id: listing5.id
      )
    
    review9 = Review.create!(
        body: "Average experience. The home was spacious, but the maintenance could be better. The host was polite, but not very attentive. The location was fine, but we expected a bit more luxury for the price.",
        cleanliness: 3,
        communication: 3,
        check_in: 4,
        accuracy: 3,
        location: 4,
        value: 3,
        rating: 3.2,
        user_id: users[9].id,
        listing_id: listing2.id
      )

      review9 = Review.create!(
        body: "My family and I had the most amazing week in paradise at this beautiful villa! Superb service, location, food and amenities. The staff is some of the best we have ever experienced, and you cannot get a better tropical destination. 10/10!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[9].id,
        listing_id: listing8.id
      )

      review10 = Review.create!(
        body: "Stayed here with a big group for a week and it was absolutely awesome. Stunning property that is as good as advertised. Cannot find a better private beach anywhere.",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[4].id,
        listing_id: listing8.id
      )

      review11 = Review.create!(
        body: "A stunning villa with breathtaking views! The Aztec-inspired facade gives the villa a unique charm. The rooms are spacious and beautifully decorated. We loved relaxing by the sea-level pool and enjoying the Caribbean breeze. The location is perfect, with downtown Cancún and Isla Mujeres just a short boat ride away. A memorable vacation!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[10].id,
        listing_id: listing9.id
        )

    review12 = Review.create!(
        body: "A dreamy villa with stunning ocean views! The architecture is simply breathtaking. The outdoor entertainment options, including the pool, sauna, and hot tub, were fantastic. We enjoyed playing tennis on the private court and lounging in the pool area. The villa is spacious and elegantly designed. A perfect retreat for a luxurious vacation!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[3].id,
        listing_id: listing10.id
        )

    review13 = Review.create!(
        body: "An architectural masterpiece with breathtaking views! The modern design complements the stunning mountain and sea vistas. The pool area was our favorite spot, and the custom-designed sun chairs were a nice touch. The villa is well-maintained and offers all the amenities we needed. A great place to unwind and enjoy the beauty of Korčula!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[9].id,
        listing_id: listing11.id
        )

    review14 = Review.create!(
        body: "A paradise on Mykonos! The villa offers dramatic views of the mountain and sea. The poolside lounging area was a highlight, and we enjoyed soaking up the sun. The villa is spacious and well-equipped with all the modern amenities. The location is serene yet conveniently close to downtown Mikonos. Highly recommend for a luxurious escape!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 5,
        rating: 5,
        user_id: users[5].id,
        listing_id: listing12.id
        )

    review15 = Review.create!(
        body: "Not as expected. The villa's facade was unique, but the interiors felt dated. We experienced some issues with cleanliness and maintenance during our stay. The pool area was nice, but it could use some improvements. The location was convenient, but overall, we felt the villa didn't live up to the price.",
        cleanliness: 3,
        communication: 4,
        check_in: 3,
        accuracy: 3,
        location: 4,
        value: 3,
        rating: 3.4,
        user_id: users[6].id,
        listing_id: listing9.id
        )

    review16 = Review.create!(
        body: "Overpriced and disappointing. While the villa had beautiful ocean views, we found some areas in need of maintenance. The pool and sauna were decent, but the hot tub was not working. The villa's interior felt a bit dated. The location was convenient, but we expected better value for the price.",
        cleanliness: 4,
        communication: 3,
        check_in: 3,
        accuracy: 3,
        location: 4,
        value: 2,
        rating: 3.0,
        user_id: users[7].id,
        listing_id: listing10.id
        )

    review17 = Review.create!(
        body: "Great views but not well-maintained. The mountain and sea views were stunning, but the villa needs some upkeep. The pool area was nice, but we had issues with cleanliness. The location was beautiful, but we felt the villa didn't fully match the advertised description.",
        cleanliness: 3,
        communication: 4,
        check_in: 4,
        accuracy: 3,
        location: 5,
        value: 3,
        rating: 3.4,
        user_id: users[4].id,
        listing_id: listing11.id
        )

    review18 = Review.create!(
        body: "Disappointing experience. The villa's location was serene, but the amenities fell short. The pool area was not well-maintained, and the villa lacked certain modern conveniences. The cleanliness was subpar, and we encountered some issues during our stay. The value for the price was not satisfactory.",
        cleanliness: 3,
        communication: 3,
        check_in: 4,
        accuracy: 3,
        location: 5,
        value: 2,
        rating: 3.0,
        user_id: users[8].id,
        listing_id: listing12.id
        )

    review19 = Review.create!(
        body: "A pleasant stay overall. The villa's facade was unique and eye-catching. The rooms were spacious and comfortable, although some areas could use a bit of refreshing. The pool by the Caribbean Sea was lovely, and we enjoyed the tranquil beach walks nearby. The location was convenient, and the boat ride to Isla Mujeres was a highlight of our trip.",
        cleanliness: 4,
        communication: 4,
        check_in: 4,
        accuracy: 4,
        location: 5,
        value: 4,
        rating: 4.2,
        user_id: users[5].id,
        listing_id: listing9.id
        )

    review20 = Review.create!(
        body: "A delightful villa with stunning views. The architecture was impressive, and the villa was well-designed. The outdoor entertainment areas, including the pool, sauna, and hot tub, were excellent. The location offered beautiful ocean views, and the private tennis court was a great addition. We had a memorable stay and would recommend it to others!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 4,
        rating: 4.8,
        user_id: users[2].id,
        listing_id: listing10.id
        )

    review21 = Review.create!(
        body: "A charming villa with a unique touch. The Aztec-inspired facade added character to the villa. The rooms were spacious, and we appreciated the bright and airy ambiance. The sea-level pool was a delightful spot to relax and enjoy the Caribbean views. The location was perfect, with easy access to downtown Cancún and the nearby Isla Mujeres. We had a wonderful time!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 4,
        location: 5,
        value: 4,
        rating: 4.6,
        user_id: users[3].id,
        listing_id: listing9.id
        )

    review22 = Review.create!(
        body: "A marvelous villa with stunning views. The modern architectural design perfectly complemented the beautiful mountain and sea vistas. The poolside lounging area was a highlight, and the villa's spacious layout allowed us to relax comfortably. The location was serene, and we enjoyed exploring the island of Mykonos. A luxurious retreat worth every penny!",
        cleanliness: 5,
        communication: 5,
        check_in: 5,
        accuracy: 5,
        location: 5,
        value: 4,
        rating: 4.8,
        user_id: users[10].id,
        listing_id: listing12.id
        )

          
 end 
