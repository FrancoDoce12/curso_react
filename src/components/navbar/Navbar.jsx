import './Navbar.css'
import CarWidget from '../carWidget/CarWidget'
import { Link } from 'react-router-dom'
import {getFirestore, doc, addDoc, collection} from 'firebase/firestore'
import { useContext, useState } from 'react'
import {AppContext} from '../../context/context'
import UserButton from '../userButton/UserButton'



function Navbar() {




    return (
        <nav className='navbar'>
            <Link to={'/'}>
                <span className='brand'>Art E-Comerse</span>
            </Link>
            <UserButton></UserButton>
            <div className='options'>
                <h5>Categories:</h5>
                <Link to={'/category/red'}>
                    <h6>red</h6>
                </Link>
                <Link to={'/category/blue'}>
                    <h6>blue</h6>
                </Link>
                <Link to={'/category/purple'}>
                    <h6>purple</h6>
                </Link>
                <CarWidget />
            </div>
        </nav>
    )
}

export default Navbar