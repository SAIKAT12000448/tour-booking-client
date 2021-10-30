import React from 'react';
import useFirebase from '../../Firebase/useFirebase';
import Banner from '../Banner/Banner';
import Plans from '../Plans/Plans';

const Home = () => {
      const{user}=useFirebase();

    return (
        <div>
        
            <div class="container">
    <Banner></Banner>
       <Plans></Plans>

 

          
        </div>
        </div>
    );
    }

export default Home;