import React from 'react';
import useFirebase from '../../Firebase/useFirebase';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import Owner from '../Owner/Owner';
import Plans from '../Plans/Plans';


const Home = () => {
      const{user}=useFirebase();

    return (
        <div>
        
            <div class="container">
       <Banner></Banner>
       <Plans></Plans>
       <Feedback></Feedback>
       <Owner></Owner>
     

 

          
        </div>
        </div>
    );
    }

export default Home;