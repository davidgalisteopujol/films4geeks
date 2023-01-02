import React, { useEffect } from "react"
import { Context } from "../store/appContext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";


export const DetailsCard =() => {

    const { store, actions } = useContext(Context);
    const [peliculas, setPeliculas] = useState()
    let {id} = useParams()

    
   

    function filtrarPorId(obj,id) {
        if(obj.id == id) {
            return obj
        }else {
            return false 
        }
    }

    useEffect(() => {
        
        let newFilm = (filtrarPorId(store.movies,{id}))
        setPeliculas(newFilm)
    },[])

    console.log(peliculas,"pelis")

   

    return (
        <div className="bg-dark text-warning">
           
            <div className="row g-0">

                <div className="col-md-4">
                    <img className="img-fluid rounded-start" style={{width: "20rem"}}/>
                </div>

                <div className="col-md-8">

                    <div className="card-body">
                        <h2 className="card-title">{id}</h2>
                        <p className="card-text"></p>
                    </div>
                    
                </div>
            </div>
            </div>

    )
}