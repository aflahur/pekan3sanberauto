import request from 'supertest'
import { baseUrl } from '../../../data/config.js'

export async function getUser(token) {
    const response = await request(baseUrl)
        .get('/users')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    const user = (await response)
    return user
}

export async function getUserById(token, id) {
    const response = await request(baseUrl)
        .get('/users/' + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
    const user = (await response)
    return user
}