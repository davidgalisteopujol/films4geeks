import React from "react"
import { Context } from "../store/appContext";
import { Link} from "react-router-dom";


export const Card = ({id, title, index,src}) => {


    return (

        <div className="card ms-4" style={{width: "17rem"}}> 
        <img className="card-img-top" src={src} alt="Card image cap" /> 
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-text">{id}</h6>
        <Link to={`/details/${id}`} className="btn btn-outline-primary mr-4">More details</Link>
        </div>
</div>
    )
}



