import request from 'supertest';
import app from '../src/app';

describe('Controllers', () => {


    const typeUser = 1;

    //Array con los usuarios
    describe("arrayUsers", () => {
        it("should return an array of users", async () => {
            const response = await request(app).get(`/users/all/${typeUser}`);
            expect(response.body).toBe('array');
        });
     }
    );

    //Array con los contactos
    describe("arrayContacts", () => {
        it("should return an array of contacts", async () => {
            const response = await request(app).get(`/directory/all/${typeUser}`);
            expect(response.body).toBe('array');
        });
     });


});