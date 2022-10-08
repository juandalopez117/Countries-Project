const {Country, Activity} = require('../db.js')
const axios = require('axios')
const url_countries = 'https://restcountries.com/v3/all'

const getAllCountries = async function(){
    let {data} = await axios.get(url_countries)
    const country = data.map(c => {
        return{
            id: c.cca3,
            name: c.name.official,
            flagImage: c.flags[1],
            continent: c.continents ? c.continents[0] : null,
            capital: c.capital ? c.capital[0] : null,
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        }
    })

    await Country.bulkCreate(country, { ignoreDuplicates: true})
    const countries = await Country.findAll({include: {model: Activity}})
    return countries
}

// Name as a parameter
const getCountry = async function(id){

    let result = await Country.findByPk(id.toUpperCase(), {include: {model: Activity}} )
    console.log(result)
    let info = result.dataValues
    // información del pais: devuelve el pais con datos y actividades. 
        return{
            id: info.id,
            name: info.name,
            flagImage: info.flagImage,
            continent: info.continent,
            capital: info.capital,
            subregion: info.subregion,
            area: info.area,
            population: info.population,
            Activities: result.dataValues.Activities
        }
}

module.exports = {
    getAllCountries,
    getCountry
}