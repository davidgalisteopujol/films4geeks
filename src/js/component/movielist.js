import React, {useContext} from "react";
import { Context } from '../store/appContext';
import { DeleteOutline } from "@mui/icons-material";

import '../../styles/movielist.css'

export const Movielist = () => {
const {store, actions } = useContext(Context);


  return (
    <div className="text-center d-flex flex-wrap">
        {
			store.favourites.map((favourite, index) => {
				return (
                <div key={index}>
                        <div>
                        <img src={favourite} className='grid'/>
                        </div>
                        <button onClick={() => actions.removeFavourite(favourite)} key={index} className='remove-fav'><DeleteOutline /></button>
                 </div>
				)
			})
		}
    </div>
  )
}

