const express = require("express");
const connectMongo = require("./db/db");
const routes = require("./routes/blogRoutes_temp");
const cors = require("cors");
const app = express()
connectMongo()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/blog', routes)
app.listen(4000, () => {
  console.log('Server is running...');
})