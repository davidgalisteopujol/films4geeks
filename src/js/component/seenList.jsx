import React, {useContext} from "react";
import { Context } from '../store/appContext';
import { DeleteOutline } from "@mui/icons-material";

import '../../styles/pending.css'

const Seenlist = () => {
const {store, actions } = useContext(Context);
    return (
      <div className="text-center d-flex flex-wrap">
          {
              store.seen.map((movie, index) => {
                  return (
                    <div key={index}>
                        <div>
                        <img src={movie} className='grid'/>
                        </div>
                        <button onClick={() => actions.removeSeen(movie)} key={index} className='remove-pend'><DeleteOutline /></button>
                     </div>
                  )
              })
          }
      </div>
    )
  }

  export default Seenlist
  
