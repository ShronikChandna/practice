import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from 'react-router'
import plate from '../img/plate.png'

const Login=({counter , setCounter})=> {
	const [suc, setSuc]=useState(false)

	const Validate = ( e) => {

		console.log("ciunter",counter);
		var Name = document.getElementById("name").value;
		var Password = document.getElementById("pass").value;

		var storedData;
		var obj={Name,Password};
		var myVal=JSON.stringify(obj);
		localStorage.setItem("myVal",myVal);
	
		storedData = JSON.parse(localStorage.getItem('myJSON'));
		


		var alpha = /^[a-zA-Z]+$/;

		if (!Name.match(alpha)) {
			alert("Name can not have numbers, please re-check");
			e.preventDefault();			

			return false;
		}
	

		else if(Name == storedData.Name && Password == storedData.Password)
    {
			localStorage.setItem('token',true)
	
			setCounter(true);
			setSuc(true);			
    }
    else{
			alert("Check Name and password ");
			e.preventDefault();
			return false;
		}
	
		
		
}

			
	
	(function () {
	
		window.addEventListener(
			"click",
			function () {
				

					// Get the textbox by its Id
					
			
					// Check the text box for empty string (with no blank spaces)
				
				
				var inputs = document.getElementsByClassName("form-control");

				
				var validation = Array.prototype.filter.call(inputs, function (input) {
					input.addEventListener(
						"blur",
						function (event) {
							
					
							input.classList.remove("is-invalid");
							input.classList.remove("is-valid"); 	

							if (input.checkValidity() === false  ) {
								input.classList.add("is-invalid");
							} else {
								input.classList.add("is-valid");
							}
						},
						false
					);
				});
			},
			false
		);
	})();

	return (
        <div className="sign-div">
            <div className="form-div">
            <form className="form needs-validation " id="myForm"  onSubmit={Validate}>
				<legend className="legend">LogIn</legend>
				<br />
				<div>
					<label className="label">Name</label><br />
                    <input type="text" id="name" name=" name" className="form-control" required />
                    <div className="valid-feedback">Looks good!</div>
							<div className="invalid-feedback">Doesn't look good!</div>
						
				</div>

				<div>
					<label className="label">Password</label><br />
                    <input type="password" id="pass" className="form-control" name="pass" required/>
                    <div className="valid-feedback">Looks good!</div>
							<div className="invalid-feedback">Doesn't look good!</div>
				</div>
				
				<button className="btn m-2"  type="submit"><img src={plate } className='white' /></button>

			</form>
            </div>
			{suc == true ? <Redirect to='/welcome' />:null}
		</div>
	);
}

export default Login;
