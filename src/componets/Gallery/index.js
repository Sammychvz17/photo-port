import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery(props) {
    const currentCatergory = {
        name: 'commercial',
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return ( 
        <section>
            <h1>{capitalizeFirstLetter(currentCatergory.name)}</h1>
            <p>{currentCatergory.name}</p>
            <div>
                <img
                src={photo}
                />
            </div>
        </section>
    );  
}

export default Gallery; 

