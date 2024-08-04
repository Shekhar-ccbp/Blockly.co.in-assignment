import {useEffect} from 'react'

function RoutePath({path}) {
  useEffect(() => {
    const {google} = window.google
    const pathCoordinates = path.map(loc => ({
      lat: loc.latitude,
      lng: loc.longitude,
    }))

    const routePath = new google.maps.Polyline({
      path: pathCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })

    routePath.setMap(window.mapInstance)

    return () => {
      routePath.setMap(null)
    }
  }, [path])

  return null
}

export default RoutePath
