import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import poster1 from "../img/p2.jpg";
import poster2 from "../img/p1.jpeg";
function Welcome() {
    const [fwd, setFwd]=useState(0)
	const [load, setLoad] = useState(true);
	
    var Name;
    var Contact;
    var Email;
    var storedData
    function dash() {
        if (localStorage.length > 0) {
            storedData = JSON.parse(localStorage.getItem("myJSON"));
            Name = storedData.Name;

            Contact = storedData.Contact;
            Email = storedData.Email;
        }
    } ;

	
  

	return (
        <div>
           
                    <div>

                    <div className="dash-left">
				<div className="dash-cont" onLoad={dash()}>
					<h2>
						<u>Welcome</u>
					</h2>
					<br></br>
					<span id="name">Name: </span>
                        <span id="Name">{Name}</span>
					<br></br>
                        <span id="contact">Phone: </span> <span id="Contact">{Contact }</span>
					<br></br>
                        <span id="emai">Email: </span> <span id="Email">{Email}</span>
				</div>
                        </div>
                <h1 id="aboard">Welcome Aboard !!</h1>
                
                        <div className="ab">
                             
                        <div className="card card-cus">
                            <div>
                            <img className="card-img-top" src={poster1} />
                                </div><br></br>
                                <div>
                                 
                                    <h5>Watch Exciting episodes and enjoy your time!!</h5>
                                </div>
                            </div>
                            <div className="card card-cus">
                            <div>
                            <img className="card-img-top" src={poster2} />
                                </div><br></br>
                                <div>
                                    <h5>Look out for your Favourite characters! </h5>
                                    
                                </div>
                            </div>
                           
                        </div>
                      {fwd===2?<Redirect to="/epitem"/>:null}
                    </div>
      

			
		</div>
	);
}

export default Welcome;
