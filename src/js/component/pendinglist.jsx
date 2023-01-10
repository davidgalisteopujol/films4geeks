import React, {useContext} from "react";
import { Context } from '../store/appContext';
import { DeleteOutline } from "@mui/icons-material";

import '../../styles/pending.css'

const Pendinglist = () => {
const {store, actions } = useContext(Context);
    return (
      <div className="text-center d-flex flex-wrap">
          {
              store.pending.map((movie, index) => {
                  return (
                    <div key={index}>
                        <div>
                        <img src={movie} className='grid'/>
                        </div>
                        <button onClick={() => actions.removePending(movie)} key={index} className='remove-pend'><DeleteOutline /></button>
                     </div>
                  )
              })
          }
      </div>
    )
  }
  
export default Pendinglist