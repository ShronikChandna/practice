import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from '../img/vn.png';



import { useState } from "react";
function Home() {
	return (
    <div>
      <h1 id="bb">Breaking Bad</h1>
			<div className="banner">
				<div className="hero ">
					{/* Carousel.........................................................*/}

					<Carousel>
						<Carousel.Item>
							<img className="d-block w-100 ban" src={img1} alt="First slide" />
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100 ban"
								src={img2}
								alt="Second slide"
							/>
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100 ban" src={img3} alt="Third slide" />
						</Carousel.Item>
						<Carousel.Item>
							<img className="d-block w-100 ban" src={img4} alt="First slide" />
						</Carousel.Item>
					</Carousel>
				</div>
			</div>

			<div className="content">
				
				<h3 id="au"><u>About Us</u></h3>
				<p className="cont par">
					Breaking Bad is an American neo-Western crime drama television series
					created and produced by Vince Gilligan. The show aired on AMC from
					January 20, 2008, to September 29, 2013, consisting of five seasons
					for a total of 62 episodes. It was set and filmed in Albuquerque, New
					Mexico, and tells the story of Walter White (Bryan Cranston), an
					underpaid and dispirited high school chemistry teacher who is
					struggling with a recent diagnosis of stage-three lung cancer. White
					turns to a life of crime, partnering with his former student Jesse
					Pinkman (Aaron Paul), by producing and distributing crystal meth to
					secure his family's financial future before he dies, while navigating
					the dangers of the criminal underworld. The title is a Southern
					colloquialism meaning "to turn to a life of crime". Among the
					show's co-stars are Anna Gunn and RJ Mitte as Walter's wife Skyler and
					son Walter, Jr., and Betsy Brandt and Dean Norris as Skyler's sister
					Marie Schrader and her husband Hank, a DEA agent. Others include Bob
					Odenkirk as White's and Pinkman's sleazy lawyer Saul Goodman, Jonathan
					Banks as private investigator and fixer Mike Ehrmantraut, and
					Giancarlo Esposito as drug kingpin Gus Fring. The final season
					introduces Jesse Plemons as the criminally ambitious Todd Alquist, and
					Laura Fraser as Lydia Rodarte-Quayle, a cunning business executive
					secretly managing Walter's global meth sales for her company.
				</p>
				<p className="cont par">
					Breaking Bad's first season received generally positive reviews, while
					the rest of its run received universal acclaim, which would make
					critics laud it as one of the greatest television series of all
					time. It had moderate viewership in its first three seasons, but
					the fourth and fifth seasons saw a significant rise in viewership when
					it was made available on Netflix just before the fourth season
					premiere. By the time that the series finale aired, it was among the
					most-watched cable shows on American television. The show received
					numerous awards, including 16 Primetime Emmy Awards, eight Satellite
					Awards, two Golden Globe Awards, two Peabody Awards, two Critics'
					Choice Awards, and four Television Critics Association Awards.
					Cranston won the Primetime Emmy Award for Outstanding Lead Actor in a
					Drama Series four times, while Aaron Paul won the Primetime Emmy Award
					for Outstanding Supporting Actor in a Drama Series three times; Anna
					Gunn won the Primetime Emmy Award for Outstanding Supporting Actress
					in a Drama Series twice. In 2013, Breaking Bad entered the Guinness
					World Records as the most critically acclaimed show of all time.
					Better Call Saul, a prequel series featuring Odenkirk, Banks, and
					Esposito reprising their Breaking Bad roles, debuted on AMC on
					February 8, 2015, and has been renewed for a final sixth season. The
					sequel film El Camino: A Breaking Bad Movie starring Aaron Paul was
					released on Netflix and in theaters on October 11, 2019.
				</p>
      </div>
      <div>
        <img src={img5}  id="vn"/>
      </div>
      <div class="footer-foot">
      <h3 class="ftext">Copyright © Breadking Bad | Corp.</h3>
    </div>
		</div>
	);
}

export default Home;
