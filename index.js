const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get("/", async(req, res) => {
    try{
        return res.status(200).send("Hello World!")
    } catch (error) {
        return res.status(500).send("Internal Server Error!")
    }
})

app.listen((port), () => {
    console.log(`App listening on PORT ${port}!`)
})