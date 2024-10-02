import { Request, Response } from 'express'

export function AliveHandler(_: Request, res: Response) {
    res.send({
        message: "Hello World"
    })
}