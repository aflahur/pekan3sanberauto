import request from 'supertest'
import { baseUrl } from '../../../data/config.js'

export async function addCategory(token) {
    const payload = {
        "name": "makanan ringan",
        "description": "makanan ringan dari indofood"
    }


    const response = await request(baseUrl)
        .post('/categories')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
}