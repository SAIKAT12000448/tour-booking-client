import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../../Firebase/useFirebase';
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const{user}=useAuth();
         const{planId}=useParams();
         const[getplan,setplan]=useState({});
         useEffect(()=>{
            fetch(`http://localhost:5000/plans/${planId}`)
            .then(res=>res.json())
            .then(data=>setplan(data))
         },[])


    return (
        <div className="container">
           
          <h3 className="text-center mt-5 mb-2">BOOK ASAP!!</h3>
            <h5 className="mb-4 text-center">Hello <span className="text-danger"> {user.displayName}</span> !! this is a best choice</h5>
            <div className="row">
    <div className="col-lg-6">
        <img style={{borderRadius:"100px"}} className="w-100" src={getplan.imgUrl} alt="" />
    </div>
    <div className="col-lg-6 ">
    <div className="card w-80 mt-2" >
  <div className="card-header">
   <h2 className="text-center">Details</h2>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">place: {getplan.placeName}</li>
    <li className="list-group-item">{getplan.description}</li>
    <li className="list-group-item">District: {getplan.district}</li>         
    <li className="list-group-item">Address: {getplan.address}</li>         
    <li className="list-group-item">Phone: {getplan.number}</li>         
    <li className="list-group-item">Stipend: {getplan.price}</li>         
    <button type="button" className="btn btn-dark fw-bolder">Book this now</button>        
  </ul>
</div>

    </div>
  </div>
</div>
            
            

    );
};

export default Booking;