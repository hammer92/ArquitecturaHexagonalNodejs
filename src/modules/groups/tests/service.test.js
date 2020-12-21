const request = require("supertest");
const app = require("../../../../app-test");

describe("Service Module Groups", () => {

    test('Error de autenticacion Crear Grupo', function(done) {
        request(app)
            .post('/api/groups')
            .send({ name: 'john' })
            .expect(401)
            .end(done);
    });
})
