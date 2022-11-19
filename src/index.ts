import express,{ Express } from "express";
import dotenv from 'dotenv'
import { Routes } from "./infrastructure/routes";
import {customLogger} from './infrastructure/winston'


class App{
    public readonly app: Express 
    public readonly routes:Routes
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes = new Routes()
        this.app.use('/api',this.routes.routes())
    }

    private middlewares(){
        this.app.use(express.json())
    }
}

dotenv.config()
const server = new App()
const app = server.app
app.listen(process.env.PORT,()=>{
    customLogger.info(`server up: localhost:${process.env.PORT}`)
})