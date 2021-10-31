import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h2 className="text-center my-5">FeedBack of Users</h2>
            <div className="row  row-cols-1 row-cols-md-4 g-4">
      <div className="col">
      <div class="card" style={{width: "18rem"}}>
  <img style={{borderRadius:"50%"}} height="300px" src="https://i.ibb.co/MP0mZ9F/alia.jpg
" class="card-img-top p-5" alt="..."/>
  <div class="card-body">
      <h4>Alia Bhat</h4>
    <p class="card-text">Wow!! it was a great time i have spend with Ranveer. Really they give romantic picnic spot!! Dil kush ho gaya.</p>
  </div>
</div>
      </div>
    

    <div className="col">
    <div class="card" style={{width: "18rem"}}>
  <img style={{borderRadius:"50%"}} height="300px" src="https://i.ibb.co/6wPkx5J/trump.jpg" class="card-img-top p-5" alt="..."/>
  <div class="card-body">
      <h4>Donald Trump</h4>
    <p class="card-text">After breakeup with my wife. i spend time with alone(maybe) by booking spot. there i sing, i am faded!!!</p>
  </div>
</div>
    </div>

    
    <div className="col">
    <div class="card" style={{width: "18rem"}}>
  <img style={{borderRadius:"50%"}} height="300px" src="https://i.ibb.co/g4zwDfF/Khaby-lame.jpg" class="card-img-top p-5" alt="..."/>
  <div class="card-body">
      <h4>khaby</h4>
    <p class="card-text">HI!! this is very easy. people can easily book a picnic spot from home. what a service!! everythings easy!!</p>
  </div>
</div>
    </div>

    <div className="col">
    <div class="card" style={{width: "18rem"}}>
  <img style={{borderRadius:"50%"}} height="300px"src="https://i.ibb.co/M1NzLLk/litondas.jpg" class="card-img-top p-5" alt="..."/>
  <div class="card-body">
      <h4>Liton Das</h4>
    <p class="card-text">Awsome!!! i spend time with my wife after marriage by booking a picnic spot by this website. there services is greate!!</p>
  </div>
</div>
    </div>


          
        </div>
        </div>
    );
};

export default Feedback;