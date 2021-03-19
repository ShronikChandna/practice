import React, { useEffect, useState } from "react";
import axios from "axios";
import Characters from "./Characters";

const Api = () => {
	const [num, setNum] = useState();
	const [name, setName] = useState([]);
	const [moves, setMoves] = useState('');

	useEffect(() => {
		async function getData() {
			 await axios
				.get(`https://www.breakingbadapi.com/api/characters?name=${moves}`)	

				.then((res) => {
					 console.log(res.data);
					setName(res.data);
				})
				 .catch((error) =>{ 
				console.log(error);
			})
           

					console.log("name check", name);
        }
        
     
		getData();
	}, [moves]);

	return (
		<div className="search">
			<h1 className="heading">Search characters</h1>

			<input
				type="text"
				onChange={(e) => {
					setMoves(e.target.value);
                }}
                value={moves}
                placeholder="search"
                className="sbar"
            ></input>
        

		

		<Characters name={name} />
		
		</div>
	);
};
export default Api;
