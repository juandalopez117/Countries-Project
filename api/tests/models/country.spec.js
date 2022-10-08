const { Country, conn } = require('../../src/db.js');


const country = {
  name: 'Argentina',
  id: 'ARG', 
  image: "https://flagcdn.com/w320/ar.png",
  continent: 'South America',
  capital: 'Buenos Aires',
  subregion: 'vdfvsvf',
  area: 321354,
  population: 53186,
}


describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true })) ;
    
    describe('id', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({id: null})
        .then(() => done(new Error('Id is null')))
        .catch(() => done())

      });

      it('should work when its a valid id', () => {
        Country.create(country);
      });
    });



    describe('name', () => {
      it('should throw an error if name is null',  () => {
        Country.create({name: null})
        .then(() => done(new Error('Id is null')))
        .catch(() => done())
      });

      it('should work when its a valid name', () => {
        Country.create(country);
      });
    });

    describe('flagImage', () => {
      it('should raise an error if flagImage is not a string', async () => {
        Country.create({flagImage: 2156})
        .then(() => done(new Error('flagImage isn\t a string')))
        .catch(() => done())
      })
    })

    describe('Continent', () => {
      it('should raise an error if continent is not a string', async () => {
        Country.create({continent: 31783})
        .then(() => done(new Error('Continent isn\'t a string')))
        .catch(() => done())
      })


    });
    describe('Capital', () => {
      it('should raise an error if capital is not a string', (done) => {
        Country.create({capital: 12})
        .then(() => done(new Error('it requires a string')))
        .catch(() => done())
      })
    })

    describe('Subregion', () => {
      it('should raise an error if subregion, is not a string', (done) => {
        Country.create({subregion: 12})
        .then(() => done(new Error('it requires a string')))
        .catch(() => done())
      })
    })
  });
});
