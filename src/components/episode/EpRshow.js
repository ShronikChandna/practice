import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import poster1 from "../../img/s1.jpg";
import poster2 from "../../img/s2.jpg";
import poster3 from "../../img/s3.jpg";
import poster4 from "../../img/s4.jpg";
import poster5 from "../../img/s5.jpg";
import { addList, fetchEpisodes } from "../../redux/episodes/EpAction";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function EpRshow({ EpData, fetchEpisodes, list, setList }) {
	const [searchEp, setSearhEp] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		fetchEpisodes();
	}, []);
	function seasons(search) {
		setSearhEp(
			EpData.filter((item) => item.season == search),
			console.log("sea", searchEp)
		);
	}
	function popUp(i) {
		

		if (list.includes(i)) {
			// alert("Already added");
            toast.error("Already added");
            return false;
		} else {
            // alert("ADDED");
            toast.info("ADDED");
			setList([...list, i]);
		}
	}


	function switchCase(season) {
		switch (season) {
			case "1":
				return <img className="card-img-top" src={poster1} />;
				break;
			case "2":
				return <img className="card-img-top" src={poster2} />;
			case "3":
				return <img className="card-img-top" src={poster3} />;
			case "4":
				return <img className="card-img-top" src={poster4} />;

			case "5":
				return <img className="card-img-top" src={poster5} />;

			default:
				return <img className="card-img-top" src={poster1} />;
				break;
		}
	}

	const showEp = () => {
		return !EpData ? (
			<h2 className="text-primary">
				Loading... {console.log("datafhty", EpData)}{" "}
			</h2>
		) : (
			<div className="cont">
				<div className="row">
					{(EpData && !searchEp) || searchEp == ""
						? EpData.map((i) => (
								<div className="card p-2 col-md-2" key={i.episode_id}>
									{switchCase(i.season)}

									<div className="card-body">
										<div>
											Episode No: <b>{i.episode}</b>
										</div>
										<div>Title: {i.title}</div>
										<div>
											Season: <b>{i.season}</b>
										</div>
										<div>
											<u>Air-date: {i.air_date}</u>
										</div>
									</div>
									<button className="btn btn-primary" onClick={() => popUp(i)}>
										Add to Watch List
									</button>
								</div>
						  ))
						: searchEp.map((i) => (
								<div className="card p-2 col-md-2" key={i.episode_id}>
									{switchCase(i.season)}

									<div className="card-body">
										<div>
											Episode No: <b>{i.episode}</b>
										</div>
										<div>Title: {i.title}</div>
										<div>
											Season: <b>{i.season}</b>
										</div>
										<div>
											<u>Air-date: {i.air_date}</u>
										</div>
									</div>
									<button
										className="btn btn-primary fav"
										onClick={() => popUp(i)}
									>
										Add to Watch List
									</button>
								</div>
						  ))}
				</div>
			</div>
		);
	};
	return (
		<div>
			<select
				className="sel"
				onClick={(e) => {
					seasons(e.target.value);
				}}
			>
				<option value="" className="opt">
					Select Season
				</option>
				<option value="1" className="opt">
					{" "}
					Season 1
				</option>
				<option value="2" className="opt">
					{" "}
					Season 2
				</option>
				<option value="3" className="opt">
					{" "}
					Season 3
				</option>
				<option value="4" className="opt">
					{" "}
					Season 4
				</option>
				<option value="5" className="opt">
					{" "}
					Season 5
				</option>
			</select>

			{showEp()}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		EpData: state.episodes.slice(0, 62),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchEpisodes: () => dispatch(fetchEpisodes()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EpRshow);
