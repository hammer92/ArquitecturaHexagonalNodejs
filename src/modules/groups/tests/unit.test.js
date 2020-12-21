const { createCase, listCase } = require("../application/")
const { authGpsRepository } = require("../infrastructure/repositories")
const { AuthGps } = require("../../../loaders/sequelize")

describe("Module Groups", () => {
    test('createCase', (done) => {
        AuthGps.sync().then(()=>{
            const handler = new createCase(authGpsRepository)
            handler.execute({ name: "grupo test" }).then(data =>{
                expect(data.toJSON()).toEqual({
                    "name": "grupo test",
                    "state": true,
                    "id": data.id,
                    "createdAt": data.createdAt,
                    "updatedAt": data.updatedAt,
                })
                done()
            })
        })

    });

    test('listCase',  (done) => {
        const handler = new listCase(authGpsRepository)
        handler.execute({}).then(data =>{
            expect(data).toContain({
                "docs": data.docs,
                "pages": data.pages,
                "total": data.total,
            })
            done()
        })


    });
})
