import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addplan.css'


const Addplans = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
      data.status="pending"
      axios.post('https://gory-demon-52495.herokuapp.com/addplans',data)
     
      .then(res=>{
       console.log(res)
          if(res.data.insertedId){
              alert('added successfully');
              reset()
          }
      })
    };




    return (
        <div>
           <h3 className="text-center my-5">Add a New plans</h3>
           <div className="row text-center">
               <div className="col-md-6">
            
                <img className="img-fluid" height="300px" src="https://i.ibb.co/0FyfH86/Summer-camp-with-people-sitting-near-bonfire-Vector-cartoon-landscape-with-mountain-forest-and-camps.jpg" alt="" />


               </div>


               <div className="form col-md-6">
    <form className="form-container ms-4 p-5" onSubmit={handleSubmit(onSubmit)}>
      <input className="mb-3" {...register("placeName", )} placeholder="place Name"/>
      <textarea className="mb-3"{...register("description")} placeholder="description"/>
      <input className="mb-3"{...register("imgUrl")}placeholder="img-Url" />
      <input className="mb-3"{...register("address")}placeholder="address" />
      <input className="mb-3"{...register("district")}placeholder="district" />
      <input type="number" className="mb-3"{...register("number")}placeholder="Phone Number" />
      <input type="number" className="mb-3"{...register("price")}placeholder="price" />
      <button type="button,submit" className="btn btn-info fw-bold rounded-pill">ADD</button>
      
    </form>
    </div>


           </div>
       
   
  
        </div>
    );
};

export default Addplans;