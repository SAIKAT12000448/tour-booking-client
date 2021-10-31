import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Manageall = () => {
          const{user}=useAuth();
          const{planId}=useParams()
          const[place,setplace]=useState([]);

          useEffect(()=>{
              fetch(`https://gory-demon-52495.herokuapp.com/manageall`)
              .then(res=>res.json())
              .then(data=>setplace(data));
          })
         console.log(place)
    return (
        <div>
            <h1>place:{place.length}</h1>
            {
                
            }

        </div>
    );
};

export default Manageall;
