import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Plans = () => {
    const[plans,setPlans]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/plans')
        .then(res=>res.json())
        .then(data=>setPlans(data))

    },[])


    return (
        <div>
            <h1 className="my-5 text-center">plans for booking!</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
           {
                  plans.map(plan=><div key={plan._id}>
                     
  <div className="col">
    <div className="card">
      <img height="300px" src={plan.imgUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{plan.placeName}</h5>
        <p className="card-text">{plan.description.slice(0,120)}...........</p>
        <Link to={`/booking/${plan._id}`}><button type="button" className="btn btn-success fw-bold">Book Now</button></Link>
      </div>
    </div>
  </div>

 
                  </div>
                  )
           }
        </div>
        </div>
    );
};

export default Plans;