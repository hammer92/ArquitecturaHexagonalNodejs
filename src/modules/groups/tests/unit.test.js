const { createCase } = require("../application/")
const { authGpsRepository } = require("../infrastructure/repositories")
const { AuthGps } = require("../../../loaders/sequelize")

describe("Module Groups", () => {
    test('createCase', async () => {
        await AuthGps.sync()
        const handler = new createCase(authGpsRepository)
        const data = await handler.execute({Name: "grupo test"})
        expect(data.toJSON()).toEqual({
            "Name": "grupo test",
            "State": true,
            "id": data.id,
            "createdAt": data.createdAt,
            "updatedAt": data.updatedAt,
        })
    });
})
