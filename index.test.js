const request = require('supertest');
const server = require('./index');

describe('Server', () => {
  afterAll((done) => {
    // Close the server after finishing tests to avoid jest hanging
    server.close(done);
  });

  it('should be up and return 200 on base route', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
  });
});