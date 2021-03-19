 import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './Login.js';
import { Redirect } from 'react-router';
import plate from '../img/plate.png'


function SignUp() {
	const [count, setCount] = useState(0);


	
	
	const Validate = (e) => {

		var flag = false
		
		var Name = document.getElementById("name").value;
	
		var Email = document.getElementById("email").value;
	
		var Password = document.getElementById("pass").value;
		
		var Password2= document.getElementById("pass2").value;
	
		var Contact = document.getElementById("contact").value;

		var minlen = 10;
		var alpha = /^[a-zA-Z]+$/;
		var plen = 6;

		console.log(Password.length	);
		console.log(typeof Password)

		if (!Name.match(alpha)) {
			// alert("Name can not have numbers or spaces in between, please re-check");
			document.getElementById('wrong_name').innerHTML = "Name can not have space or numbers";
			e.preventDefault();
			// return false;
			flag = false;
		}
		else {
			document.getElementById('wrong_name').innerHTML = "";
			
		}
		

		 if (Contact.length != minlen) {
			// alert("enter a valid number")
			e.preventDefault();
			// return false;
			document.getElementById('wrong_phone').innerHTML = "Enter a valid number";
			 
			flag = false;

		 }
		 else {
			document.getElementById('wrong_phone').innerHTML = "";
			 
		}
		
		 if (Password.length < plen) {
			
			// alert("Passwords should be atleast 6 Characters long ")
			document.getElementById('wrong_pass').innerHTML = "Password should be atleast 6 characters long";
			 
			e.preventDefault();
			return false;
			flag = false;

		 }
		 else {
			document.getElementById('wrong_pass').innerHTML = "";
			 
		}
		// else {
			
		// 	setCount(count + 1, console.log(count))
		// 	flag = true;
			

		// }
		
		 if (Password !== Password2) {
			// alert("Passwords do not match")
			document.getElementById('wrong_pass2').innerHTML = "Password do not match";

			 e.preventDefault();
			return false;
			flag = false;

		}
		else {
			var obj={Name,Email, Contact,Password,Password2};
			var myJSON=JSON.stringify(obj);
			localStorage.setItem("myJSON", myJSON);
			document.getElementById('wrong_pass2').innerHTML = "";
		
			setCount(count + 1, console.log(count))
			flag = true;
			

		}


		
			
	
		
		
	
	
	}


	// (function () {
	
	// 	window.addEventListener(
	// 		"click",
	// 		function () {
				

	// 				// Get the textbox by its Id
					
			
	// 				// Check the text box for empty string (with no blank spaces)
				
				
	// 			var inputs = document.getElementsByClassName("form-control");

				
	// 			var validation = Array.prototype.filter.call(inputs, function (input) {
	// 				input.addEventListener(
	// 					"blur",
	// 					function (event) {
							
					
	// 						input.classList.remove("is-invalid");
	// 						input.classList.remove("is-valid"); 	

	// 						if (input.checkValidity() === false) {
	// 							input.classList.add("is-invalid");
	// 						} else {
	// 							input.classList.add("is-valid");
	// 						}
	// 					},
	// 					false
	// 				);
	// 			});
	// 		},
	// 		false
	// 	);
	// })();

	return (
        <div className="sign-div">
            <div className="form-div">
				<form className="form needs-validation " id="myForm" name="myForm" onSubmit={Validate} >
					
				<legend className="legend">Sign Up</legend>
				<br />
				<div>
					<label className="label">Name</label><br />
						<input type="text" id="name" name=" name" className="form-control" required />
						
   							<span id="wrong_name" className="wrong"></span>
                   
						
				</div>

				<div>
					<label className="label">Email</label><br />
                    <input type="email" id="email" name="email" className="form-control" required/>
                    
				</div>
				<div>
					<label className="label">Contact</label><br />
                    <input type="number" id="contact" name="contact" className="form-control" min="0" required/>
                    <span id="wrong_phone" className="wrong"></span>
				</div>
				<div>
					<label className="label">Password</label><br />
                    <input type="password" id="pass" className="form-control" name="pass" required/>
                    <span id="wrong_pass" className="wrong"></span>
				</div>
				<div>
					<label className="label">Confirm Password</label><br />
                    <input type="password" className="form-control" id="pass2" name="pass2" required/>
                    <span id="wrong_pass2" className="wrong"></span>
                </div>
					
					<button className="btn m-2"  type="submit"><img src={plate } className='white' /></button>
					
			</form>
            </div>
			{count === 1 ? <Redirect to='/login' />:null}
		</div>
	);
}

export default SignUp;
