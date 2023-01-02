import React from "react"
import { useState,useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
const API_IMAGE = 'https://image.tmdb.org/t/p/w500/'

export const Card = ({id, title, index,src}) => {

    const { store, actions } = useContext(Context);
    

    let {uid}= useParams()

    return (

        <div className="bg-dark text-warning">
           
           <div className="row g-0">

               <div className="col-md-4">
                   <img src={src} className="img-fluid rounded-start" />
               </div>

               <div className="col-md-8">

                   <div className="card-body">
                       <h2 className="card-title">{title}</h2>
                       <p className="card-text">{id}</p>
                   </div>
                   
               </div>
               <Link to={`/details/${id}`} className="btn btn-outline-primary mr-4">More details</Link>
               
           </div>
        </div>

    )
}



