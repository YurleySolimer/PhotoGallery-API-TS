import { connect } from 'mongoose'

export async function startConnection() {
    await connect('mongodb://localhost/gallery-db', {
        useNewUrlParser: true
    })
    console.log('DB is connected')
}