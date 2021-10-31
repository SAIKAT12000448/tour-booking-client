import React from 'react';
import './Owner.css'
const Owner = () => {
    return (
        <div className="owner mt-5">
              <div className="row g-2">
                  <div style={{padding:"100px"}} className="col-lg-5">
                      <img style={{height:"400px",borderLeft:"10px solid rgb(24, 176, 214)",borderTop:"10px solid rgb(24, 176, 214)",borderRadius:"10px",boxShadow:"opx, 0px ,3px ,2px"}}  className="img-fluid" src="https://i.ibb.co/fvh8xDL/sk.jpg" alt="" />
                      s
                  </div>
                  <div style={{padding:"100px"}}className="col-lg-7 text-info">
                            <h1>Hi i am Saikat Datta. Owner Of this Website</h1>
                            <p className="text-white">Enjoy your Journey!!</p>
                            <div className="d-flex">
                                <h4><i class="fab fa-linkedin me-4"></i></h4>
                                <h4 style={{color:"blue"}}><i class="fab fa-facebook text-white me-4"></i></h4>
                                <h4><i class="fab fa-instagram-square text-danger"></i></h4>
                            </div>
                  </div>
              </div>
        </div>
    );
};

export default Owner;