import './Banner.css'
import React from 'react';
import { Button } from "@material-ui/core"

const Banner = () => {
    return (
    <div className="banner">
        <div className="banner__search">
            <Button variant="outlined" className="banner__searchButton">Search Dates</Button>
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
