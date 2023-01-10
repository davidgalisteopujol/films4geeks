import React from 'react'
import { Context } from '../store/appContext';
import Movielist  from '../component/movielist.jsx';
import Pendinglist  from '../component/pendinglist.jsx';
import Seenlist from '../component/seenList.jsx';
import '../../styles/profile.css'

const Profile = () => {
  return (
    <div className='container mt-4'>

        <div className='d-flex justify-content-start'>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQFtEtujM7WC1SIlFmLLCR4N_SdWJcg_Cg6w&usqp=CAU' className='avatar mt-4 me-4'/>
             <div className='bio mt-4 ms-2'>
                <p>Name: </p>
                <p>Favourite genres: </p>
             </div>
        </div>

        <div className='p-4'>
            <h4>My favourites</h4>
                <Movielist />
        </div>
        <div className='p-4'>
            <h4>I want to see...</h4>
                <Pendinglist />
        </div>
        <div className='p-4'>
            <h4>Movies I've already seen...</h4>
                <Seenlist />
        </div>

    </div>
  )
}

export default Profile
