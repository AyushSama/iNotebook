const connectToMongo = require('./db.js')
connectToMongo();
const express = require('express')
const app = express()
const port = 5000

app.use(express.json());

app.use('/api/auth' , require('./Routes/Auth.js'))
app.use('/api/note' , require('./Routes/Note.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})