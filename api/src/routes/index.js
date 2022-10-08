const { Router } = require('express');
const axios = require('axios')
const {Country, Activity, cache} = require('../db.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllCountries, getCountry} = require('./Controllers.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async function(req, res){
    const {name} = req.query
    let result
    if(!cache.AllCountries){
        // usa una variable auxiliar (cache) para verificar si el modelo tiene datos.
        // Sino tiene, importa datos de la api con la función getAllCountries,
        // y si los tiene entonces trae los datos desde el modelo para evitar redefinir elementos.
        cache.AllCountries = await getAllCountries()
        result = cache.AllCountries
        console.log('from API')
    }
    else{
        result = await Country.findAll({include: Activity})
        console.log('from DataBase!')
    }
    try{
        if(name){
            let countryName = result.filter( c => c.name.toLowerCase().includes(name.toLowerCase()))
            countryName.length ? 
            res.status(200).send(countryName) : 
            res.status(404).send('Country not founded!!')
        }
        else{
            res.status(200).send(result)
        }
    }
    catch(error){
        res.send(error.msg)
        //corregir 
    }
})

router.get('/countries/:id', async function(req, res){
    const {id} = req.params
    let count = await  getCountry(id)
    try {
        res.status(200).send(count)
    } catch (error) {
        console.log(error)
    }
})

router.post('/activities', async function(req, res){
    const {id, name, difficult, duration, season, countries} = req.body
    try{
        if(countries.length > 0){
            var Ac = await Activity.create({
                id,
                name,
                difficult, 
                duration,
                season
            })
            // se relaciona la actividad con los países dados en el post
            countries.forEach(async id =>{
                var C = await Country.findByPk(id)
                C.addActivity(Ac)
            })


            
            res.status(201).json(Ac)
        }
    }
    catch(error){
        console.log(error)
    }
})

router.get('/activities',  async function(req, res){
    
    try {
        const Act =  await Activity.findAll({include: Country})
/*         var Actvs = []
        for(let i = 0; i < Act.length; i++){
            Actvs.push(Act[i].dataValues)
        }
 */
        
        res.status(200).send(Act)
    } catch (error) {
        console.log(error)
    }
})

router.get('/country', async function(req, res){
    let {id} = req.query
    let Data = await Country.findByPk(id)
    try{
        

        console.log(Data)
    res.send(Data)
    }
    catch(err){
        console.log(err)
    }
    
})


module.exports = router;
