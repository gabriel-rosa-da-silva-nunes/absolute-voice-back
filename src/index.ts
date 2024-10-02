import express from 'express';
import { AliveHandler } from "./application/handler/alive-handler";
import sequelize from "./config/database/sequelize-instance";

const app = express()
const port = 3000

try {

    async function StartApp() {
        await sequelize.authenticate()

        app.get('/', AliveHandler)

        app.listen(port, () => {
            console.log(`App Listening on Port ${port}`)
        })
    }

    StartApp()
} catch (error) {
    console.error("Unable to connect to the database", error)
}

