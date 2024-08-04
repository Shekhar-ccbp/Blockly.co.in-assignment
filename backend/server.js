const express = require('express')

const app = express()
const path = require('path')
const vehicleRoutes = require('./routes/vehicleRoutes')

const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', vehicleRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
