import React from "react";
import { useParams } from 'react-router-dom';


import PlaceList from "../components/PlaceList";


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

const UserPlaces = ()=>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId)

    return(
        <PlaceList items={ loadedPlaces}/>
    )
}
export default UserPlaces;