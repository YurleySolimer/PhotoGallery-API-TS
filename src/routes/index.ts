import { Router } from "express";
import multer from '../libs/multer'

import { createPhoto, getPhoto } from "../controllers/photo.controllers";
const router = Router();

router.route("/photos")
    .post(multer.single('image'), createPhoto)
    .get(getPhoto);

export default router;
