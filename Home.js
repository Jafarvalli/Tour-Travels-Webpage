import React, { useState } from "react";
import './Home.css';

function Home(){
    const [loading,setLoading]=useState('');


    const Myfunction=()=>{
        setLoading("Jafr Travels is a brand in the bus operating industry.")
    }
    
    return(
        <div>
        <div className="home">
            <div className="ab">
            <h1>Jafar Travels</h1>
           
            <hr/>
           
            <p>Jafr Travels is a renowned brand in the bus operating industry. Our vision is to give a new face to the bus industry. Since our inception passenger comfort was our top priority. We have frequently added luxury buses to our huge fleet of buses. The only thing we focus on is that the comfort quotient of our passengers should never be compromised. We have always tried our best to push our limits in order to develop our travel experience. Read further to understand what we offer that enhances our reputation in the market.</p>
            </div>
            <div className="jv">
                <img src="https://www.intelligenttransport.com/wp-content/uploads/Electric-10.jpg" alt="Bus"/>
            </div>
            <div className="btn">
                <h2>{loading}</h2>
                <button onClick={Myfunction}>Read More</button>
            </div>
        </div>
        <Home1/>
       
        </div>

    )
}
function Home1(){

    return(
        <div className="Home1">
             <section className="sec1">
                 <h2>Welcome to Jafar Tours & Travels</h2>
                 <h2>About us :</h2>
                 <p>Jafar Tours & Travels is a pioneer in the online bus reservation in India which utilizes the advantages of the internet to provide our clients with the best in bus transportation services from the comforts of their homes and offices.Ovr Tours & Travels provides real-time Internet quotations and real-time bus booking services to direct customers, agents and tour operator partners.</p>
                 <p>The idea for Ovr Tours & Travels has stemmed from the need for simple travel solutions. Buses are the most commonly used form of travel in India, be it within a city or intra-city. In fact, buses are sometimes the only form of transportation available to reach the remote parts of India. However, reserving a seat on a bus is one of the most tedious processes.</p>
            </section>
            <section className="images">
                  <h2>Our Services</h2>
                  <h3>Bangalore</h3>
                  <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201802/coinn_660_022618014547.jpg" alt="img3"/>
                  <h3>Hyderabad</h3>
                  <img src="https://telanganatoday.com/wp-content/uploads/2020/11/transform.jpg" alt="img2"/>
              </section> 
        </div>
    )
}
export default Home;
