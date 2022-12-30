import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import quotes from '/workspace/react-hello-webapp/quotes.json'
import { Favorite, Tour } from "@mui/icons-material";
import axios from "axios";


import '../../styles/home.css'

const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

export const Home = () => {
	const {store, actions } = useContext(Context);

	return (
	
	<div className="container mt-5">
		<div>
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
		</div>


		
		<div className="row my-4 d-flex justify-content-center">
		<h2 className="mb-4">Popular in 2022...</h2>
		{
			store.movies.slice(0,4).map((movie, index) => {
				return (
			<div className="mb-1" style={{ width: '18rem' }} key={index}>
				<img className="card-img-top" src={API_IMAGE+movie.poster_path} />
					<div>
						<Link to={`details/${index}`}>
							<button className="btn btn-secondary me-5 mt-2">Learn more</button>
						</Link>
						{store.favourites.includes(API_IMAGE+movie.poster_path) ? null : (
						<button onClick={() => actions.setFavourites(API_IMAGE+movie.poster_path)} className='fav'><Favorite /></button>
						)}
						{store.pending.includes(API_IMAGE+movie.poster_path) ? null : (
						<button onClick={() => actions.setPending(API_IMAGE+movie.poster_path)} className='pended'><Tour /></button>
						)}
					</div>
			</div>
		
				)
			})
		}
		</div>
		<div className="row d-flex justify-content-center">
			<h2 className="mb-4">Coming soon...</h2>
			{
				store.comingSoon.slice(5,9).map((movie, index) => {
					return (
					<div  style={{ width: '18rem' }} key={index} className='text-center'>
						<img className="card-img-top" src={movie.image} />
						
					</div>
					)
				})
			}
		</div>


	
	</div>

	)
};


