import request from 'supertest';
import app from '../index'; // export your Express app instead of listen() inside

test('GET / should return 200', async () => {
  const res = await request(app).get('/');
  expect(res.status).toBe(200);
});
