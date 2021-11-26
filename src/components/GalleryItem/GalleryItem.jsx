import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList'

function GalleryItem({photo}) {
    console.log('in GalleryItem');
    return (
        <p>
            <img key={photo.id} src={photo.path}/>
            {/* <button onClick="submit">love it!</button> */}
        </p>
    )
}

export default GalleryItem;