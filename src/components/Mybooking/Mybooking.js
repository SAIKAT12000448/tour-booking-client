import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const Mybooking = () => {
    const{user} = useAuth();
    const[spots,setspots]=useState([])
    const [control, setConrol] = useState(false);
    
   useEffect(()=>{
       fetch(`https://gory-demon-52495.herokuapp.com/bookinfo?displayName=${user.displayName}`)
       .then(res=>res.json())
       .then(data=>setspots(data))
   },[control])

  const handleDelete=id=>{
      fetch(`https://gory-demon-52495.herokuapp.com/deletebook/${id}`,{
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.deletedCount) {
            setConrol(!control);
            window.confirm('are you sure!')
          } else {
            setConrol(false);
          }
      })
  }


    return (
        <div>
          
            <h1 className="text-center">My allBooking</h1>
            <div className='row g-4'>
{

    spots.map(spot=>
                <div className="col-lg-4">
                <div class="card">
  <div class="card-header">
   <h3 className="text-success">{spot.status}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name:{spot.name}</li>
    <li class="list-group-item">Destination: {spot.text}</li>
    <li class="list-group-item">email:{spot.email}</li>
    <li class="list-group-item">address:{spot.address}</li>
    <button onClick={()=>handleDelete(spot._id)} type="button" class="btn btn-danger">Delete</button>
  </ul>
</div>
                </div>

   )
}
</div>
        </div>
    );
};

export default Mybooking;