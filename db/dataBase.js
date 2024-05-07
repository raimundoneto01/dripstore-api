import { Sequelize } from "sequelize";
import 'dotenv/config.js'


const HOST =process.env.PGHOST
const DATA_BASE =process.env.PGDATABASE
const USER=process.env.PGUSER
const PASS = process.env.PGPASSWORD
const STRING_CONNECTION = `postgresql://${USER}:${PASS}@${HOST}/${DATA_BASE}?sslmode=require`
 export const sequelize = new Sequelize(STRING_CONNECTION)