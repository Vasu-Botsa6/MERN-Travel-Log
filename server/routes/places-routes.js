const express = require('express')

const router  = express.Router

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://lh3.googleusercontent.com/p/AF1QipMDv3C-fXXvEvttpkkgNG5Rg52BwR4SBaA1w0dR=s680-w680-h510',
        address:'20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484445,
            long:-73.9882393
        },
        creatorId:'u1'
        
    },

    {
        id:'p2',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://lh3.googleusercontent.com/p/AF1QipMDv3C-fXXvEvttpkkgNG5Rg52BwR4SBaA1w0dR=s680-w680-h510',
        address:'20 W 34th St., New York, NY 10001, United States',
        location:{
            lat:40.7484445,
            long:-73.9882393
        },
        creatorId :'u2'
    },
]

router.get('/:pid',(req,res, next)=>{
    console.log("GET request in places");

    const placeId = req.params.pid 
    const place = DUMMY_PLACES.find(p=>{
        return p.id === placeId
    })
    res.json({place})   //{place} = {place:place}
})

router.get('/user/:uid',(req,res, next)=>{

    const userId = req.params.uid 
    const place = DUMMY_PLACES.find(p=>{
        return p.creatorId === userId
    })
    res.json({place})   //{place} = {place:place}
})

module.exports = router;
