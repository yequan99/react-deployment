const express = require('express')
const os = require('os')
const cors = require('cors')

const app = express()
const port = 5050

app.use(cors())
app.use(express.json())

app.get("/", (req,res) => {
    const message = `${os.hostname()}`
    console.log(os)
    res.json(message)
})

app.listen(port, () => { console.log(`Server started on port ${port}`) })