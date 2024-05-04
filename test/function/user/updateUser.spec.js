import request from 'supertest'
import { baseUrl } from '../../../data/config.js'
import { DataUpdate } from '../../../data/userData.js'

export async function updateUser(token, id) {
    const response = await request(baseUrl)
        .put('/users/' + id)
        .send(DataUpdate)
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
}