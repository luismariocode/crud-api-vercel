import request from 'supertest';
import app from '../src/app';


describe('Routes', () => {
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
