import React from 'react'
import { Link } from 'react-router-dom';
import logo from './Image/Logo.PNG';
import backgroundImage from './Image/Login_page.jpg';

function Home() {
  return (

    <section class="h-100 gradient-form" style={{backgroundImage: "url(" + backgroundImage + ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'
  }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">

                    <div class="text-center">
                      <img src={logo} alt="logo" style={{ width: "185px" }} ></img>
                      <h4 class="mt-1 mb-5 pb-1" style={{ color: "red" }}>Delivey Made Easy</h4>
                    </div>
                    <div class="text-center pt-1 mb-5 pb-1">
                      <Link to="/login">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" style={{textDecorationColor:'none'}}>Log
                          in</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">How it Works!</h4>
                    <p class="small mb-0">We provide online delivery service. The main issue for going online for the stores like cake shops or gift shops is
                      they don’t have delivery person or they don’t want to spend extra money on delivery.	A simple idea to neutralize delivery cost is to get the delivery done by a person who somehow 	wants to reach the delivery destination by means of his own work and 
                      in return he will receive points that can be redeemed next time he orders from that shop and this way the delivery costs can be neutralized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home