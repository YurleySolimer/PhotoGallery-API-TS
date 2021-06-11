import { Request, Response } from 'express'

export function createPhoto(req: Request, res: Response): Response {
    console.log('saving pic')
    console.log(req.file)
    const { title, description } = req.body
    const { path } = req.file;
    const newPhoto = {
        title,
        description,
        imagePath: path
    }
    return res.json({msg:'Photo saved'})
}

export function getPhoto(req: Request, res: Response): Response {
    console.log('saving pic')
    return res.json({msg:'Photo get'})
}