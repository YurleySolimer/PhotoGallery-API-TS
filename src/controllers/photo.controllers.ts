import { Request, Response } from 'express'
import Photo from '../models/Photos'

export async function createPhoto(req: Request, res: Response): Promise<Response> {
    const { title, description } = req.body
    //console.log((req as any).files[1])
    const { path } = req.file;
    const newPhoto = {
        title,
        description,
        imagePath: path
    }

    const photo = new Photo(newPhoto)
    await photo.save()
    return res.json({msg:'Photo saved', photo})
}

export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find()
    return res.json(photos)
}