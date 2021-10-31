import React from 'react';
import useFirebase from '../../Firebase/useFirebase';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import useAuth from '../Hooks/useAuth';
import Owner from '../Owner/Owner';
import Plans from '../Plans/Plans';


const Home = () => {
    //   const{user}=useFirebase();
      const { user,isLoading } = useAuth();
    if (isLoading) {
        return <div className="spinner-border text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    }

    return (
        <div>
        
            <div className="container">
       <Banner></Banner>
       <Plans></Plans>
       <Feedback></Feedback>
       <Owner></Owner>
     

 

          
        </div>
        </div>
    );
    }

export default Home;