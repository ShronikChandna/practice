import React, { useState } from "react";

function List({ list, setList }) {
	const ddelete = (id) => {
		const removeArr = list.filter((todo) => todo.episode_id !== id);
		setList(removeArr);

		//console.log("Remove todo called");
	};

	return (
		<div>
			<u><h1 id="wl">Watch List</h1></u>
			{console.log("this is lissssssssss", list)}
			<div id="list-div">
			<ul>
				{list &&
					list.map((item) => (
						//to loop through value should be unique
						<div key={item.episode_id} className="li-items ">
							{console.log("map item")}

							<li key={item.episode_id} className="li-items">
								{"Episode : " + item.episode + "   "}

								{" ,  Season : " + item.season}

								<button
									className="btn  btn-danger m-4 "
									onClick={() => ddelete(item.episode_id)}
								>
									Delete
								</button>
							</li>
						</div>
					))}
			</ul>
</div>

		</div>
	);
}

export default List;
