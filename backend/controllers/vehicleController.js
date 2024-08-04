const vehicleData = require('../data/dummyData.json')

const getVehicleData = (req, res) => {
  res.json(vehicleData)
}

module.exports = {getVehicleData}
