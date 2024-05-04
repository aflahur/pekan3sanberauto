import { createToken } from "../function/createToken.spec.js";
import { addUser } from "../function/user/addUser.spec.js";
import { expect } from "chai";
import { getUser, getUserById } from "../function/user/getUser.spec.js";
import { DataCreate } from "../../data/userData.js";
import { updateUser } from "../function/user/updateUser.spec.js";
import { deleteUser } from "../function/user/deleteUser.spec.js";

describe(' End to End - user', () => {
    let token;
    let userId;
    let response;

    describe('Add User', () => {

        it('Succes create user', async () => {
            token = await createToken()
            response = await addUser(token)
            userId = (await response).body.data.userId
            expect((await response).status).to.equal(201)

        })

        it('Verify response message equal User berhasil ditambahkan', async () => {
            response = await addUser(token)
            expect((await response).body.message).to.equal('User berhasil ditambahkan')
        })
    })

    describe('Get User', () => {
        it('Success Get user', async () => {
            response = await getUser(token)
            expect((await response).status).to.equal(200)
        })

        it('Success Get user By Id', async () => {
            response = await getUserById(token, userId)
            expect((await response).status).to.equal(200)
        })
    })

    describe('Update User', () => {
        it('Succes Update User', async () => {
            response = await updateUser(token, userId)
            expect((await response).status).to.equal(200)
        })

        it('Verify response message equal User berhasil diupdate', async () => {
            expect((await response).body.message).to.equal('User berhasil diupdate')
        })
    })

    describe('Delete User', () => {
        it('Succes Delete User', async () => {
            response = await deleteUser(token, userId)
            expect((await response).status).to.equal(200)
        })

        it('Verify response message equal User berhasil dihapus', async () => {
            expect((await response).body.message).to.equal('User berhasil dihapus')
        })
    })
}
)