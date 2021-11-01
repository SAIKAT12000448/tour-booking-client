import React, { useEffect, useState } from 'react';

import useAuth from '../Hooks/useAuth';

const Manageall = () => {
          const{user}=useAuth();
         
          const[place,setplace]=useState([]);

          useEffect(()=>{
              fetch('https://gory-demon-52495.herokuapp.com/allbooking')
              .then(res=>res.json())
              .then(data=>setplace(data));
          })
        
       const deletebtn=()=>{
            alert('only admin can delete it!!!')
       }




    return (
        <div>
        <h3 className="my-4 text-center">All users booking</h3>
        <div className="row">
            {
                place.map(pl=><div className="col-lg-3">
                    <div className="card">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{pl.name}</li>
    <li className="list-group-item">{pl.email}</li>
    <li className="list-group-item">Destination:{pl.text}</li>
    <li className="list-group-item">{pl.address}</li>
  </ul>
  <div className="card-footer">
  <button type="button" className="btn btn-secondary">Update</button>
  <button onClick={deletebtn} type="button" className="btn btn-danger ms-4">Delete</button>
  </div>
</div>
                </div>)
            }
          

        </div>
        

        </div>
    );
};

export default Manageall;
