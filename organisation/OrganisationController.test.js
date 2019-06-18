const request = require('supertest');
const app = require('../app');

describe('GET /organisations', () => {
  it('respond with 200 and json containing a list of all organisations', (done) => {
    request(app)
      .get('/organisation')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(err => (err ? done(err) : done()));
  });
});


describe('POST /organisation', () => {
  const data = {
    name: 'FakeOrganisation',
    year: 2018,
    revenue: 12345678,
  };
  it('respond with 201 and json, organisation created', (done) => {
    request(app)
      .post('/organisation')
      .send(data)
      .set('Accept', 'application/json')
      .expect(201)
      .expect('Content-Type', /json/)
      .end(err => (err ? done(err) : done()));
  });
});

describe('GET /organisation/companyName', () => {
  it('respond with 200 and json containing organisation', (done) => {
    request(app)
      .get('/organisation/FakeOrganisation')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(err => (err ? done(err) : done()));
  });
});

describe('PUT /organisation/name', () => {
  const data = {
    name: 'FakeOrganisationRenamed',
    year: '2016',
    revenue: '1234322',
  };
  it('respond with 200 and json, organisation updated', (done) => {
    request(app)
      .put('/organisation/FakeOrganisation')
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(err => (err ? done(err) : done()));
  });
});

describe('DELETE /organisation/name', () => {
  it('respond with 200. organisation deleted', (done) => {
    request(app)
      .delete('/organisation/FakeOrganisationRenamed')
      .expect(200)
      .end(err => (err ? done(err) : done()));
  });
});

describe('GET /organisation/companyName', () => {
  it('respond with 404, not found', (done) => {
    request(app)
      .get('/organisation/FakeOrganisation')
      .expect(404)
      .end(err => (err ? done(err) : done()));
  });
});
