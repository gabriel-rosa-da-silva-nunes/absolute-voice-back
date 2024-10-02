import express from 'express';
import {AliveHandler} from "./application/handler/alive.handler";

const app = express()
const port = 3000

app.get('/', AliveHandler)

app.listen(port, () => {
    console.log(`App Listening on Port ${port}`)
})