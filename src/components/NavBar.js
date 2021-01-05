import React from 'react';
import { Link } from 'react-router-dom';
 

export default function NavBar() {
    return (
        <div className='navbar'>
             <h1 className='title'>Anywhere Fitness</h1>
            <ul>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About Us</Link>
                <Link className='link' to='/login'>Login</Link> 
                <Link className='link' to='/signup'>SignUp</Link> 
                <Link className='link' to='/contact'>Contact</Link> 
            </ul>
        </div>
    )
}