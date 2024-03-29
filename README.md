# LuxeBNB
<a href="https://luxebnb.onrender.com/">Live Link! </a>
<img width="1440" alt="Screen Shot 2023-08-04 at 4 11 42 PM" src="https://github.com/michelleeli/LuxeBNB/assets/130802181/3dd81479-d1ff-4562-82de-cff52601d9a7">

## Introduction
Luxebnb is a clone of Airbnb, an online marketplace for short and long-term homestays, specifically for luxury properties. Users are able to make reservations for upcoming trips, write reviews for previous trips, and add listings to their wishlist. The technologies implemented include: 
* Languages: JavaScript, Ruby, HTML, CSS
* Frontend and State Management: React, React-Redux, Google Maps JavaScript API
* Database: PostgreSQL
* Hosting: Render
* Asset Storage: AWS Simple Cloud Stoage (S3)

## Features
### User Authentication
Users are able to create new accounts or login with existing accounts. Account creation is secured with password encryption. Frontend and backend error handling is used to validate user credentials. A demo user login is available to access the site as a logged in user without creating a new account.

```
return (
    <form className="loginForm" onSubmit={handleSubmit} onClick={stopProp}>
      <h4>Log In</h4>
      <hr/>
      <h3>Welcome to Luxebnb</h3>
      <div id="errors">
        {errors && <i class="fa-solid fa-circle-exclamation" style={{color: "#b34125",}}></i>}
        <span className="errors">      {errors}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      <br/>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="submit" type="submit">Continue</button>
      <br/>
      <button className="submit" onClick={demoLogin}>Demo Login</button>
    </form>
```

### Listings 
The landing page displays all available listings with a caption of location, price, and rating. Users can filter the listings with the filter menu by types. The toggle button on the landing page to "Show Map" and "Show List" changes the view from a grid of all listings to a map of all listings and vice versa. 

Clicking on a listing in the landing page or map progagates the show page for the listing which includes: clickable images to open a image carousel modal, details of amenities offered by the property, average ratings and reviews, a pinned location on Google Maps, as well as a component to create a reservation. 

![ezgif com-video-to-gif (3)](https://github.com/michelleeli/LuxeBNB/assets/130802181/92668a62-c6ae-44e7-acb0-b16443373b44)

### Reservations
To make a reservation, the user must be signed in. Pressing the reserve button when not signed in will automatically propagate the login modal. When logged in, the user can select check-in/check-out days and number of guests for the reservation. Reserved calendar dates will be blocked out and an error appears if user tries to make a reservation for less than one night. 

![ezgif com-video-to-gif (1)](https://github.com/michelleeli/LuxeBNB/assets/130802181/9fabb733-adc5-4cad-84ef-dfdcc67d06b7)

### My Trips 
Logged in users are able to access their reservations under "My Trips". Upcoming reservations can be updated or canceled and users can write/edit/delete reviews for their previous reservations. 

![ezgif com-video-to-gif (2)](https://github.com/michelleeli/LuxeBNB/assets/130802181/d84352e6-80ee-40b5-9799-241a75d9fa8c)


### Wishlist
Logged in users are also able to "like" and "unlike" listings. Liked listings will show under "Wishlist" and users can unlike to remove them. 

```
    return(
        <>
        {future && (<button id="cancel" onClick={deleteRes}>Cancel reservation</button>)}
        {!future && (<button id="cancel" onClick={openReviewForm}>{reviewType === "Create" ? "Write a review" : "Update review" }</button>)}
        {!future && reviewType === "Update" && <button id="cancel" onClick={deleteRev}>Delete Review</button>}
        {openReview && (
            <Modal onClose={() => setOpenReview(false)}>
                <ReviewForm reservation={reservation}/>
            </Modal>
        )}
        
        {reservation && listing && (
            <>
        <div className="upcomingDiv" onClick={showListing}>
            <div className="upcomingDescription">
                <h2 id="city">{listing.city}</h2>
                <span id="hostedBy">Hosted by {listing.host}</span>
                <hr id="upcomingHr"/>
                <div className="dateAddress">
                    <p id="startDate">{reservation.startDate}</p>
                    <p id="address">{listing.address} {listing.city}, {listing.state}</p>
                </div>
            </div>
            <img className="reservationImg" src={listing.photoUrl}></img>
       
        </div>
        </>
        )}
```
