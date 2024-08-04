import {useRef, useEffect} from 'react'

function MapComponent({children}) {
  const mapRef = useRef(null)

  useEffect(() => {
    const {google} = window.google
    const map = new google.maps.Map(mapRef.current, {
      center: {lat: 17.385044, lng: 78.486671},
      zoom: 14,
    })

    return () => {
      // eslint-disable-next-line no-unused-expressions
      map && google.maps.event.clearInstanceListeners(map)
    }
  }, [])

  return (
    <div ref={mapRef} style={{height: '500px', width: '100%'}}>
      {children}
    </div>
  )
}

export default MapComponent
