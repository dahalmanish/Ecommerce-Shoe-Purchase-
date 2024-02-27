import React from 'react';
// Import the specific icon


const Navbar = () => {
    return (
        <> 
         <nav className='container'> 
                <div className="logo">
                    <img src="./image/logo.png" alt="Loading" />
                </div>
                <div className="homebar">
                    <ul>
                        <li><a href="/discover">Discover</a></li>
                        <li><a href="/trips">Trips</a></li>
                        <li><a href="/review">Review</a></li>
                        <li><a href="/more">More</a></li>
                    </ul>
                </div>
                <button>Login</button>
            </nav>
            </>
    );
};

export default Navbar;