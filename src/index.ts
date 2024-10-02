import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send({
        message: "Hello World"
    })
})

app.listen(port, () => {
    console.log(`App Listening on Port ${port}`)
})