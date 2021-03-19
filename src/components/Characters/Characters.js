import React from "react";

const Characters = ({ name }) => {
    return (
    <div className="cont">
            
  
        <div className="row r ">
            {/* {console.log(name)} */}
            {name.map((i) => (
					<div className="card p-2 col-md-2    " >
                    <img src={i.img} className="card-img-top" alt={i.name} />
                    <div className="card-body">
                        <div>Name: {i.name}</div>
                        <div>Birthday: {i.birthday}</div>
                        <div>Occupation: {i.occupation+", "}</div>
                        <div>NickName: {i.nickname}</div>
                    </div>
                </div>
			))}
		  </div>
		</div>
	);
};

export default Characters;
