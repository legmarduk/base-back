import { Request, Response, Router } from "express";
import loggerRequest from "../middlewares/loggerRequest";

export class Routes{

    public router:Router

    constructor(){
        this.router = Router()
    }

    routes():Router{
        this.router.use(loggerRequest)
        this.router.get('/ping', (req:Request,res:Response)=>{
            res.send('pong')
        })

        return this.router
    }

}