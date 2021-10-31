import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const Mybooking = () => {
    const{user} = useAuth();
    const[spots,setspots]=useState([])
    useEffect(()=>{
        fetch(`https://gory-demon-52495.herokuapp.com/myplans/${user?.displayName}`)
        .then(res=>res.json())
        .then(data =>setspots(data))
    },[user.displayName]);


    return (
        <div>
            <h1>my booking: {spots.length}</h1>
        </div>
    );
};

export default Mybooking;