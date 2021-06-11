import { Router } from "express";
import multer from '../libs/multer'

import { createPhoto, getPhotos, getPhoto } from "../controllers/photo.controllers";
const router = Router();

router.route("/photos")
    .post(multer.single('image'), createPhoto)
    .get(getPhotos);

router.route("/photos/:id")
    .get(getPhoto);

export default router;
