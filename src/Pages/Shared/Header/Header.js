import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/bookworm.png';
 import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }


    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/addServices'>Add Service</Link></li> 
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/orders'>My Review</Link></li>
                    <li className='font-semibold'>
                    <button onClick={ handleLogOut } className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
            } 
       
             </>

    
      


    return (
        <div className="navbar h-20 mb-6 pt-6 pb-10 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/sv" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>  
                    
                    </label> 
                    
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
         
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="h-15 w-20" src={logo} alt="" />
                    <h1 className='font-semibold text-4xl'> Book Worm </h1>   
                </Link>
                    
               
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* {menuItems} */}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">

            <ul className="menu menu-horizontal p-0">
                     {menuItems} 
                </ul>
            {/* {menuItems} */}
           
            </div>
        </div>
    );
};

export default Header;