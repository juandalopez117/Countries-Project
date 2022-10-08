const {expect} = require('chai')
const { beforeEach } = require('mocha')
const session = require('supertest-session')
const app = require('../../src/app.js')
const {Activity, conn} = require('../../src/db.js')

const agent = session(app)
const Activ = {
    id: 20,
    name: 'Run',
    difficult: 10,
    duration: 11,
    season: ['Spring', 'Summer'],
    countries: ['USA', 'COL']
  }
  

const Activ2 = {
    id: null,
    name: 'Run',
    difficult: 10,
    duration: 11,
    season: ['Spring', 'Summer'],
    countries: ['USA', 'COL']
  }  

describe('Activity routes', () => {
    before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

    beforeEach(() => Activity.sync({ force: true })
    .then(() => Activity.create(Activ)));

    describe('POST /activities', () => {
        it('should get 201', () => {
            agent.post('/activities', Activ).expect(201)
    
        })
    })

    describe('POST /activities', () => {
        it('should get an error', () => {
            agent.post('/activities', Activ2).expect(Error)
        })
    })

    describe('GET /activities', () =>{
        it('should get 200', () =>{
            agent.get('/activities').expect(200)
        })
    })
})
    
   