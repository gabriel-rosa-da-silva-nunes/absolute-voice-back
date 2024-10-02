import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE ?? "root",
    process.env.DB_USERNAME ?? "root",
    process.env.DB_PASSWORD ?? "root",
    {
    host:process.env.DB_HOST ?? "postgres",
    dialect: "postgres"
})

export default sequelize;