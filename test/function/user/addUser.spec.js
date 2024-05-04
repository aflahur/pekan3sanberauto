import request from 'supertest'
import { baseUrl } from '../../../data/config.js'
import { DataCreate } from '../../../data/userData.js'

export async function addUser(token) {
    const response = await request(baseUrl)
        .post('/users')
        .send(DataCreate)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
}