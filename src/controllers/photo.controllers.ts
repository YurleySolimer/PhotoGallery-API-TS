import { Request, Response } from 'express'
import path from 'path'
import fs from 'fs-extra'
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

export async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find()
    return res.json(photos)
}


export async function getPhoto(req: Request, res: Response): Promise<Response> {
    const photo = await Photo.findById(req.params.id)
    return res.json(photo)
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const photo = await Photo.findByIdAndRemove(req.params.id)
    if(photo) {
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({msg: 'Photo deleted', photo})
}