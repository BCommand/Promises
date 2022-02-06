import React from 'react';
import './Header.css';

import img from '../Header/logo-avion.jpg';

const Header = ({ title }) => {
        return ( 
        <div className='Header'>
            <h1>{title}</h1>
            <img src={img} alt='Logo avion' width={300}/>
        </div>
  );
};




Header.defaultProps = {
  title: 'Vivir-Hoy Viajes',
};


export default Header;
