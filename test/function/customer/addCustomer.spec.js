import request from 'supertest'
import { baseUrl } from '../../../data/config.js'

export async function addCustomer(token) {
    const payload = {
        "name": "Budi",
        "phone": "081234567890",
        "address": "Bandoeng",
        "description": "Budi anak Pak Edi"
    }


    const response = await request(baseUrl)
        .post('/customers')
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)

    const user = (await response)
    return user
}