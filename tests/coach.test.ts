const request = require('supertest');
const { expect } = require('chai');
process.env.OPENAI_API_KEY = 'test';
const app = require('../src/index').default;

describe('POST /coach', function () {
  it('returns 400 when splits is missing', async function () {
    const response = await request(app).post('/coach').send({});
    expect(response.status).to.equal(400);
  });
});
