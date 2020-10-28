import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div class="footer">© 2020 Copyright -
            <Link to="/"> MusicAlbum.com</Link>
        </div>
    );
};

export default Footer;

