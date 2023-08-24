import React, { useRef, useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import './map.css'
import { useHistory } from 'react-router-dom/';
import { ListingIndexItem } from '../ListingIndex/ListingIndexItem';

function Map({ listings, mapOptions }) {
  const mapRef = useRef(null);
  const markersRef = useRef({});
  let currentWindow = null
  const history = useHistory()

  const redirect = (listing) => {
    history.push(`/listings/${listing.id}`)
  }

  useEffect(() => {
    if (mapRef.current === null) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: listings[0]?.lat, lng: listings[0]?.lng  }, 
      zoom: 13,
      ...mapOptions, 
    });

    if (Object.values(listings).length > 1 ) {
      for (const listing of listings) {
        let contentString = document.createElement('div')
        contentString.id = listing.id
        contentString.innerHTML = `<img id="modalImg" src=${listing.photoUrl}></img>
        <h3> ${listing.city}, ${listing.country} </h3>
        <div> $${listing.price} night </div>`

        const infowindow = new window.google.maps.InfoWindow({
          content: contentString,
        });

        const marker = new window.google.maps.Marker({
        position: { lat: listing?.lat, lng: listing?.lng },
        map,
        title: listing?.title,
        icon: "https://i.ibb.co/tMXL5Lk/Untitled-design-1-1-removebg-preview-1-1.png"
      });
          marker.setLabel({text:`$${(listing.price).toLocaleString()}`, fontWeight: "500", fontSize: "13px"} )
          markersRef.current[listing?.id] = marker;

          marker.addListener("click", () => {
            if (currentWindow != null) {
              currentWindow.close()
            }
            infowindow.open({
              anchor: marker,
              map,
            });
            currentWindow = infowindow;
          })
          window.google.maps.event.addDomListener(contentString, 'click', (()=>redirect(listing)) )
      }
    } else {
      for (const listing of listings) {
        const marker = new window.google.maps.Marker({
        position: { lat: listing?.lat, lng: listing?.lng },
        map,
        title: listing?.title,
        icon: "https://i.ibb.co/DVQh3FV/My-project-1-4.png"
      });
  
        markersRef.current[listing?.id] = marker;
      }
    }


    return () => {
      markersRef.current = {};
    };
  }, [listings, mapOptions]);

  return (
    <>
      <div ref={mapRef} id="map" > </div>
      <div id="selectedMapListing"></div>
    </>
  )
}

export default function MapWrapper(props) {
  return (
    <div id='mapcontainer'>
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <Map {...props} />
    </Wrapper>
    </div>
  );
}

