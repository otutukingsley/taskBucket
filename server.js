const express = require('express')
const connectDB = require('./config/db')

const app = express()

//Connect Database
connectDB();

//Init Middlewares
app.use(express.json({ extended: false }));


//Define Routes
app.use("/api/tasks", require("./routes/tasks"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

app.get('/', (req, res) => res.send({ message: 'Hello to the taskBucket' }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
