import { NextFunction, Request, Response } from 'express'
import { customLogger } from '../winston'

export default (request: Request, response: Response, next: NextFunction) => {
    const {
        headers,
        method,
        body,
        query,
        originalUrl
    } = request

    customLogger.info({
        headers,
        endpoint: `${method} ${originalUrl}`,
        body,
        query
    })
    next()
}