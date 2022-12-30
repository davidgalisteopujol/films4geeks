import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import '../../styles/search.css'

export const Search = () => {
	const { store, actions } = useContext(Context);
    const [searchValue, setSearchValue] = useState('Star Wars');
	const [movies, setMovies] = useState([])

    const getMovieRequest  = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a0af7bda`;

		//https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1

        const resp = await fetch(url);
        const response = await resp.json();
		console.log(response)
        setMovies(response.Search)
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

			<div className="results d-flex flex-wrap">
				{
					movies?.map((movie, index) => {
						return (
							<div key={index} className='mx-1 my-2'>
								<img src={movie.Poster} style={{height: '30rem', width:'18rem'}}/>
							</div>
						)
					})
				}
			</div>
		</div>
	
	)

};
