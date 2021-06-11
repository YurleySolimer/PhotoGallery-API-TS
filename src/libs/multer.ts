import multer from 'multer'
import { uuid } from 'uuidv4'
import path from 'path'

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.originalname + uuid() + path.extname(file.originalname))
    }
})

export default multer({storage});