import {useEffect, useState} from 'react'
import MapComponent from './MapComponent'
import VehicleMarker from './VehicleMarker'
import RoutePath from './RoutePath'

function MapContainer() {
  const [vehicleData, setVehicleData] = useState([])
  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/vehicle-data')
        const data = await response.json()
        setVehicleData(data)
        setCurrentLocation(data[data.length - 1])
      } catch (error) {
        console.error('Error fetching vehicle data:', error)
      }
    }

    fetchData()

    const intervalId = setInterval(fetchData, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <MapComponent>
      {currentLocation && <VehicleMarker position={currentLocation} />}
      <RoutePath path={vehicleData} />
    </MapComponent>
  )
}

export default MapContainer
