import React, { useRef, useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import './map.css'

function Map({ listing, mapOptions }) {
  const mapRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    if (mapRef.current === null) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: listing?.lat, lng: listing?.lng }, 
      zoom: 13,
      ...mapOptions, 
    });

    const marker = new window.google.maps.Marker({
      position: { lat: listing?.lat, lng: listing?.lng },
      map,
      title: listing?.name,
      icon: "https://i.ibb.co/DVQh3FV/My-project-1-4.png"
    });

      markersRef.current[listing?.id] = marker;
    
    return () => {
      markersRef.current = {};
    };
  }, [listing, mapOptions]);

  return <div ref={mapRef} style={{ width: '100%', height: '400px'}}> </div>;
}

export default function MapWrapper(props) {
  return (
    <div id='mapcontainer'>
    <hr/>
    <h3>Where you'll be </h3>
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <Map {...props} />
    </Wrapper>
    </div>
  );
}