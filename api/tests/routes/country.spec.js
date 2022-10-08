/* eslint-disable import/no-extraneous-dependencies */

const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');


const agent = session(app);

const Name = 'United' 
const id = 'COL'
const country = {
  name: 'Argentina',
  id: 'ARG', 
  image: "https://flagcdn.com/w320/ar.png",
  continent: 'South America',
  capital: 'Buenos Aires'
}

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));

  //? realiza correctamente un get
  describe('GET /countries', () => {
    it('should get 200', (done) =>{
       agent.get('/countries').expect(200)
       done()
    });
  });

  //? realiza correctamente un get con parametro
  describe(`GET /countries?name=${Name}`, () => {
    it('should get 200',  (done) => {
      agent.get(`/countries?name=${Name}`).expect(200)
      done()
    })
  })

  //? realiza un get a un pais especifico
  describe(`GET /countries/${id}`, () => {
    it('should get 200', (done) => {
      agent.get(`/countries/${id}`).expect(200)
      done()
    })
  })
});
