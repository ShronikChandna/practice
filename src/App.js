import "./App.css";
import Api from "./components/Characters/Api";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import "./Custom.css";
import logo from "./img/logo1.png";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import logo2 from "./img/van1.gif";
import Welcome from "./components/Welcome";
import List from "./components/watchlist/List";
import EpRshow from "./components/episode/EpRshow";
import NotFound from './components/NotFound'
function App() {
	const [flag, setFlag] = useState(0);

	const [list, setList] = useState([]);
	const [auth, setAuth] = useState(false);
	const [counter, setCounter] = useState(false);
	const [re, setRe] = useState(0);

	useEffect(() => {
		if (localStorage.length > 1) setAuth(true);
		else setAuth(false);
	}, [counter]);

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	});


	useEffect(() => {
		var token = localStorage.getItem('token');

		if (token === 'true')
			setAuth(true)
		else
			setAuth(false)
	})

	function clear() {

		// setAuth(false);
		setRe(1);
		
		// localStorage.removeItem('myJSON');
		localStorage.setItem('token', false);
		setCounter(!counter)

		setTimeout(() => {
			setRe(0)
		},1000)
		
	}
	return (
		<div className="App">
			{console.log("Auth is ", auth)}
			{loading ? (
				<img src={logo2} className="animate" />
			) : (
				<div className=" bod-load ">
					<Navbar className="cent  cont" variant="dark">
						<Link to="/">
							<img src={logo} className="logo" />
						</Link>

						<div className="ml-auto">
							{auth ? (
								<div>
									<Link className="texts" to="/welcome">
										<button
											className="btn btn-warning m-2"
											onClick={() => setFlag(1)}
										>
											Dashboard
										</button>
									</Link>
									<Link className="texts" to="/api">
										<button
											className="btn btn-warning m-2"
											onClick={() => setFlag(1)}
										>
											Characters
										</button>
									</Link>

									<Link className="texts" to="/eprshow">
										<button
											className="btn btn-warning m-2"
											onClick={() => setFlag(1)}
										>
											episode
										</button>
									</Link>
									<Link className="texts" to="/list">
										<button
											className="btn btn-warning m-2"
											onClick={() => setFlag(1)}
										>
											WatchList
										</button>
									</Link>

									<button className="btn btn-warning" onClick={clear}>
										Log Out
									</button>
								</div>
							) : (
										<div>
											<Link className="texts" to="/signup">
									<button
										className="btn btn-warning m-2"
										onClick={() => setFlag(1)}
									>
										SignUp
									</button>
										</Link>
										<Link className="texts" to="/login">
										<button
											className="btn btn-warning m-2"
											onClick={() => setFlag(1)}
										>
											Login
										</button>
									</Link>
											</div>
							)}
						</div>
					</Navbar>

					<Switch>
						<Route exact path="/" component={Home}></Route>
							<Route exact path="/api" >
							{auth ?	<Api />: <SignUp/>}
						</Route>
						{/* <Route exact path="/signup"   component={SignUp}></Route> */}
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/eprshow">
						{auth ?<EpRshow list={list} setList={setList} />: <SignUp />}	
						</Route>

						<Route
							exact
							path="/login"
							render={(props) => (
								<Login counter={counter} setCounter={setCounter} />
							)}
						/>
							<Route exact path="/welcome" >
							{auth ?	<Welcome />: <SignUp/>}
							</Route>
							<Route exact path="/list" >
								<List list={list} setList={setList}/>
							</Route>
						<Route path="*" component={NotFound} />
							
					</Switch>
				</div>
			)}
{console.log(re,"reeeeeeeeeeeee")}
			{re > 0 ? <Redirect to="/" /> : null}
		</div>
	);
}

export default App;
