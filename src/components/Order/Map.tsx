import React, { useState, useCallback, memo, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 51.5072,
  lng: 0.1276
};

function MyComponent({ positionFromPostCode, positionChange }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = useState(null)
  const [currentPostion, setCurrentPosition] = useState(positionFromPostCode);
  //{ lat: 0, lng: 0 }
  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(positionFromPostCode);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  useEffect(() => {
    if (map !== null && positionFromPostCode !== null && typeof map.center !== 'undefined') {
      //console.log(positionFromPostCode)
      map.setCenter({
        lat: positionFromPostCode?.lat,
        lng: positionFromPostCode?.lng
      })
      setMap(map);
    }
  }, [map, positionFromPostCode])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onClick = (e: google.maps.MapMouseEvent) => {
    /* console.log(
      'onClick args: ',
      e.latLng?.lat(),
      ' : ',
      e.latLng?.lng()
    )
    console.log('onClick args: ', e) */
    //console.log(`Latitude & Longitude: ${e.latLng}}`);
    const center = map.getCenter();
    //console.log(`Latitude: ${center.lat()}, Longitude: ${center.lng()}`);
  }

  const onCenterChanged = () => {
    if (map !== null) {
      const centerPos = map.getCenter();
      if (centerPos !== null) {
        setCurrentPosition({
          lat: centerPos?.lat(),
          lng: centerPos?.lng()
        });
        positionChange({
          lat: centerPos?.lat(),
          lng: centerPos?.lng()
        });
        //console.log(`Center-Latitude: ${centerPos?.lat()}, Center-Longitude: ${centerPos?.lng()}`);
      }

    }
  }


  /* const onCenterChanged = useCallback((map: google.maps.Map) => {
    const center = map.getCenter();
    console.log(`Center-Latitude: ${center.lat()}, Center-Longitude: ${center.lng()}`);
  }, []) */

  /* const onCenterChanged = useCallback(function callback(map) {
    const center = map.getCenter();
    console.log(`Center-Latitude: ${center.lat()}, Center-Longitude: ${center.lng()}`);
  }, [map]) */

  /* useEffect(() => {
    positionChange(currentPostion);
    if (map !== null) {
      map.setCenter();
    }
  }, [currentPostion]) */

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={positionFromPostCode}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onClick}
      onCenterChanged={onCenterChanged}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <Marker
        position={
          currentPostion
        }
      />
    </GoogleMap>
  ) : <></>
}

export default memo(MyComponent)