import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList'

function GalleryItem({photo}) {
    return (
        <p>
            <img src={photo.path}/>
            <button onClick="submit">love it!</button>
        </p>
    )
    
}

export default GalleryItem;