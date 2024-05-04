import { createToken } from "../function/createToken.spec.js";
import { expect } from "chai";
import { addCustomer } from "../function/customer/addCustomer.spec.js";

describe(' End to End - Customer', () => {
    let token;
    let customerId;

    it('Succes create Customer', async () => {
        token = await createToken()
        const response = await addCustomer(token)
        customerId = (await response).body.data.customerId
        expect((await response).status).to.equal(201)

    })

    it('Verify response message equal Customer berhasil ditambahkan', async () => {
        const response = await addCustomer(token)
        expect((await response).body.message).to.equal('Customer berhasil ditambahkan')
    })
}
)