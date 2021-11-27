import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'
import './GalleryItem.css'

function GalleryItem({ photo, fetchGallery }) {
    console.log('in GalleryItem');
const [display, setDisplay] = useState(true);

const addLike = () => {

    axios({
        method: 'PUT',
        url: `/gallery/like/${photo.id}`
    }).then((response) => {
        console.log(photo.likes);
        fetchGallery();
    }).catch((error) => {
        console.log('PUT route failed');
    }); 
};

const flipDisplay = () => {
    if (display) {
        setDisplay(false);
    } else {
        setDisplay(true);
    }
    }

    if(display) {
        return (
            <div>
            <p onClick={flipDisplay}>{photo.description}</p>
            <button 
                onClick={addLike}
                key={photo.id}
                >love it!</button>
                <p>{photo.likes} people love this</p>
        </div>
        )
    } else {
    return (
        <div>
            <img onClick={flipDisplay} src={photo.path}/>
            <button 
                onClick={addLike}
                key={photo.id}
                >love it!</button>
                <p>{photo.likes} people love this</p>
        </div>
    )};
}


export default GalleryItem;