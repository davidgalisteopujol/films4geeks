import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Favorite, SortRounded, Tour} from "@mui/icons-material";

import '../../styles/search.css'
const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

export const Search = () => {
	const { store, actions } = useContext(Context);
    const [searchValue, setSearchValue] = useState('');
	const [movies, setMovies] = useState([])

   const getMovieRequest  = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=c5083e57bd8e698a2a69427a666f125f&query=${searchValue}`;

		//https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1

     const resp = await fetch(url);
        const response = await resp.json();
	console.log(response)
        setMovies(response.results)
    }; 

    useEffect(() => {
  		getMovieRequest(searchValue)
    }, [searchValue])

	return (
		<div className="container">
			<div className="row my-4 d-flex justify-content-center">
				<input 
					className="form-control"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					placeholder="Search movies"
				
				/>
			</div>

			<div className="results d-flex justify-content-around flex-wrap">
				{
					movies?.map((movie, index) => {
						return (
							<div key={index} className='text-center mb-2'>
							<div>
								<img src={API_IMAGE+movie.poster_path} style={{height: '18rem'}}/>
							</div>
								{store.favourites.includes(API_IMAGE+movie.poster_path) ? null : (
								<button onClick={() => actions.setFavourites(API_IMAGE+movie.poster_path)} className='fav'><Favorite /></button>
								)}
								{store.pending.includes(API_IMAGE+movie.poster_path) ? null : (
								<button onClick={() => actions.setPending(API_IMAGE+movie.poster_path)} className='pended'><Tour /></button>
								)}
							</div>
						)
					})
				}
			</div>
		</div>
	
	)

};
