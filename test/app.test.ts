import request from 'supertest';
import assert from 'assert';
import app from '../src/app';

describe('app', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/what-is-this-even')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });

   //Index
   it('should return 200 OK for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  //Not Found
  it('should return 404 Not Found for GET /not-found', async () => {
      const response = await request(app).get('/not-found');
      expect(response.status).toBe(404);;
   });

   //Type User
   let typeUser = 1;

   //Users
   it('should return 200 OK for GET /users', async () => {
      const response = await request(app).get(`/users/all/${typeUser}`);
      expect(response.status).toBe(200);
   });

   //Contacts
   it('should return 200 OK for GET /directory', async () => {
      const response = await request(app).get(`/directory/all/${typeUser}`);
      expect(response.status).toBe(200);
   });



});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'Connection to the API ',
      }, done);
  });
});
