import {useEffect} from 'react'

function VehicleMarker({position}) {
  useEffect(() => {
    const {google} = window.google
    const marker = new google.maps.Marker({
      position: {lat: position.latitude, lng: position.longitude},
      map: window.mapInstance,
      icon: 'vehicle-icon.png',
    })

    return () => {
      marker.setMap(null)
    }
  }, [position])

  return null
}

export default VehicleMarker
