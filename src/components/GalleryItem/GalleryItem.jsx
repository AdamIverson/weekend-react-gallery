import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList'

function GalleryItem(photo) {
    console.log('in GalleryItem');
    return (
        <li>
            <img key={photo.id} src={photo.path}/>
            {/* <button onClick="submit">love it!</button> */}
        </li>
    )
    
}

export default GalleryItem;