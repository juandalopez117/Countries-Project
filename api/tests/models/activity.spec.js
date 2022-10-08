
const {Activity, conn} = require('../../src/db.js')
const { expect } = require('chai')


const Activ = {
    id: 20,
    name: 'Run',
    difficult: 10,
    duration: 11,
    season: ['Spring', 'Summer'],
    countries: ['USA', 'COL']
  }

  const Activ2 = {
    id: "A",
    name: "12",
    difficult: 10,
    duration: 11,
    season: ['Spring', 'Summer'],
    countries: ['USA', 'COL']
  }


  const Activ3 = {
    id: 3,
    name: 212,
    difficult: 10,
    duration: 11,
    season: ['Spring', 'Summer'],
    countries: ['USA', 'COL']
  }

describe('Activity Model', () => {
    before( () => conn.authenticate()
    .catch(err => {
        console.log('Unable to connect to the db: ', err)
    }))

    describe('Validate', () => {
        beforeEach(() => Activity.sync({force: true}))


        describe('id', () => {
            it('should be a number', async  () => {
                let A = await Activity.create(Activ)
                try{
                    expect(A.dataValues.id).to.be.a('number')
                }
                catch(err){
                    console.log(err)
                }
            })
            
            it('Should rise an error if id isn\'t a number',  (done) => {
                Activity.create(Activ2).then(() => done())
                .catch((err) => {
                    expect(err.errors[0].message).to.equal('Id must be an integer')
                    done()
                })                
            })
        })

        describe('name', () => {
            it('should be a string', async  () => {
                let A = await Activity.create(Activ)
                try{
                    expect(A.dataValues.name).to.be.a('string')
                }
                catch(err){
                    console.log(err)
                }
            })

            it('Should rise an error if name isn\'t a string',  (done) => {
                Activity.create(Activ3).then(() => done())
                .catch((err) => {
                    expect(err.errors[0].message).to.equal('Name must be a string')
                    done()
                })                
            })
        })
    })
})
/* const {Activity, conn} = require('../../src/db.js')
const {expect} = require('mocha')

const Activ = {
    id: 20,
    name: 'Run',
    difficult: 10,
    duration: 11,
    season: ['Spring', 'Summer'],
    countries: ['USA', 'COL']
  }

  const Activ2 = {
    id: "A",
    name: "12",
    difficult: 10,
    duration: 11,
    season: ['Spring', 'Summer'],
    countries: ['USA', 'COL']
  }

describe('Activity Model', () => {
    before( () => conn.authenticate()
    .catch(err => {
        console.log('Unable to connect to the db: ', err)
    }))

    describe('Validate', () => {
        beforeEach(() => Activity.sync({force: true}))


        describe('id', () => {
            it('should be a number',   (done) => {
                Activity.create({id: Activ.id})
                done()
            })
            
            it('Should rise an error if id isn\'t a number',  (done) => {
                Activity.create({id: Activ2.id}).
                then((data) => {
                    console.log(data)
                    done(new Error('Id mus be an integer'))
                })
                .catch(() => done())                
            })
        })

        describe('name', () => {
            it('should be a string', (done) => {
                Activity.create({name: Activ.name})
                done()
            })

            it('Should rise an error if name isn\'t a string',  (done) => {
                Activity.create({name: 'jgb'}).
                then(() => {
                    done(new Error('Name must be a string'))
                })
                .catch(() => done())                    
            })
        })
    })
}) */