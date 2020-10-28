import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () =>{
    return (
        <div className="main_nav">
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/contact"><li>Subscribe</li></Link>           
            </ul>           
        </div>
    );
};

export default Nav;