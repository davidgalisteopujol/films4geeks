import React, { useEffect } from "react"
import { Context } from "../store/appContext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { objectOf } from "prop-types";


export const DetailsCard =() => {

    const { store, actions } = useContext(Context);
    const [pelicula, setPelicula] = useState()
    let {id} = useParams()


    var arr = []
        for (let x of (store.movies)){
            if(id == x.id) {
                arr.push(x)
            } 
        }
        

    useEffect(() => {
        
    
    },[])
   
    

    return (
        <div className="bg-dark text-warning">
           
            <div className="row g-0">

                <div className="col-md-4">
                    <img className="img-fluid rounded-start" style={{width: "20rem"}}/>
                </div>

                <div className="col-md-8">

                    <div className="card-body">
                        <h2 className="card-title">id</h2>
                        <h3 className="card-text"></h3>
                    </div>
                    
                </div>
            </div>
            </div>

    )
}