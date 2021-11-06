const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Connect Database
connectDB();

app.get('/', (req, res) => res.send({ message: 'Hello to the taskBucket' }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))