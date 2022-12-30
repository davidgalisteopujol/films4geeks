import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
//import quotes from '/workspace/react-hello-webapp/quotes.json'


import '../../styles/home.css'

const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

export const Home = () => {
	const {store, actions } = useContext(Context);


	return (
	
		<div className="container mt-5">
		{/* <div>
			{
				quotes.map((quote, id) => {
					return (
					<div key={id} className='quote'>
						<div className='column'> 
							<p><i>"{quote.quote}"</i></p>
							<p>{quote.movie}</p>
						</div>
					</div>	
					)
				})
			}
		</div> */}
		<h2 className="m-b4">Popular in 2022...</h2>
	
		<div className="grid d-flex row p-5">
		{
			store.movies.map((movie, index) => {
				return (
			<div className="card col-3 outline-none" style={{ width: '18rem' }} key={movie.id}>
				<img className="card-img-top" src={API_IMAGE+movie.poster_path} />
					<div className="ButtonCard d-flex justify-content-between">
						<Link to={`details/${index}`}>
							<button className="btn btn-secondary me-5 mt-2">Learn more</button>
						</Link>
					</div>
			</div>
		
				)
			})
		}
		</div>
	
	</div>

	)
};


