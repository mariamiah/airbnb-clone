import './Banner.css'
import React, { useState } from 'react';
import { Button } from "@material-ui/core"
import Search from './Search';


const Banner = () => {

    const [ showSearch, setShowSearch ] = useState(false);
    return (
    <div className="banner">
        <div className="banner__search">
            {showSearch && <Search />}
            <Button onClick={()=> setShowSearch(!showSearch)} variant="outlined" className="banner__searchButton">Search Dates</Button>
        </div>
       <div className="banner__info">
           <h1>Get out and stretch your imagination</h1>
           <h5>
               Plan a different kind of getaway to uncover the hidden gems near you
           </h5>
           <Button variant="outline">Explore Nearby</Button>
       </div>
    </div>
    )
}

export default Banner;
