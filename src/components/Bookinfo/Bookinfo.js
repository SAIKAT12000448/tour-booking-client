import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import './Bookinfo.css'
const Bookinfo = () => {
  const{user}=useAuth();
  const { register, handleSubmit,reset } = useForm();

    const onSubmit = data =>{

        data.status="approved"
        axios.post('https://gory-demon-52495.herokuapp.com/bookinfo',data)
       
        .then(res=>{
         console.log(res)
            if(res.data.insertedId){
               alert('added successfully')
                reset()
            }
        })
  
  };


   
    return (
      <div>
          <h1 className="text-center my-4">Add your information please!!</h1>

          <div className="info">
                 <form className="f-container" onSubmit={handleSubmit(onSubmit)}>
                 <input defaultValue={user.displayName} className="mb-3" {...register("name", )} placeholder={user.displayName}/>

                 <input className="mb-3" {...register("email", )} placeholder="email"/>
     
                
     
      <input className="mb-3"{...register("text")}placeholder="place you have selected" />
      <input className="mb-3"{...register("address")}placeholder="address" />
      
      <input type="number" className="mb-3"{...register("number")}placeholder="Phone Number" />
      <button type="button,submit" class="btn btn-info">Add</button>
    </form>
        </div>
      </div>
    );
};

export default Bookinfo;