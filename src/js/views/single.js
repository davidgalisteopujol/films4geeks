import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-4">
			<div className="text-center">
				<input 
					className="form-control"
					value={props.value}
					onChange={(e) => props.setSearchValue(e.target.value)}
					placeholder="Search movies"
				
				/>
			</div>
		</div>
	
	)

};
