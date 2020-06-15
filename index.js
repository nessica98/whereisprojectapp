const express = require('express')
const cors = require('cors')
const bodyps = require('body-parser')

const artist_r = require('./artist')

// data import 
const artist_data = require('./artist_data.json')

app = express()

app.use(cors())
app.use(bodyps.json())
app.use('/artist', artist_r)

app.get('/', (req,res)=> {
    console.log('ping ok')
    console.log(artist_data)
    res.send(artist_data)
})

app.listen(5000, ()=> {
    console.log('App start')
})