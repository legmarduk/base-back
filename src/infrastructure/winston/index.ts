import {createLogger,transports,format} from 'winston'


export const customLogger = createLogger({
    format: format.json(),
    transports: [
        new transports.File({
            filename: 'logs/error.log', level: 'error'
        }),
        new transports.File({
            filename: 'logs/info.log', level: 'info'
        }),
        new transports.File({
            filename: 'logs/request.log', level: 'http'
        }),
        new transports.Console({
            level: process.env.LOG_LEVEL
        })
    ]
})