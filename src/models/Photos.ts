import {Schema, model, Document} from 'mongoose'

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

export default model('Photo', schema)