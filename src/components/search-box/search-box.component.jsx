import React from 'react';
import './search-box.style.css';

export const SearchBox = ({placeholder, cariSiapa}) => (
    <input
        className='search' 
        type='search' 
        placeholder={placeholder}
        onChange={cariSiapa}
        // onChange={diketik => properti.setState({ cariDedemit: diketik.target.value })} 
    />
);


