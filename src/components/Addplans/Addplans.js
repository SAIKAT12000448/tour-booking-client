import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Addplan.css'


const Addplans = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
      axios.post('http://localhost:5000/addplans',data)
     
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
             <h1>hello</h1>
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