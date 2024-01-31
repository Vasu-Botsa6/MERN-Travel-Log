import React from 'react';
import UsersList from '../components/UsersList';

const Users =() =>{
    const USERS = [{id:'u1',
                    name:"Vasu",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxRMRRUkBg4NQuXj9MJHYIrhjhO7gEknZuA&usqp=CAU",
                    places:3        
                    },
                    {id:'u2',
                    name:"Sameer",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFy8vfgsAnrBnWQAuhtApv3Uyv-yCBlN8MZg&usqp=CAU",
                    places:2        
                    },
                ];
    return(
        <UsersList items={USERS}/>
    )
}

export default Users;