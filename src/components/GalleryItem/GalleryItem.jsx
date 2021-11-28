import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'
import './GalleryItem.css'

function GalleryItem({ photo, fetchGallery }) {
    console.log('in GalleryItem');
const [display, setDisplay] = useState(true);

// ideally the PUT route goes in the App.jsx
// at some point I will refactor this code,
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

if (display) {
    return (
        <div>
            <p className="description" onClick={flipDisplay}>{photo.description}</p>
            <button 
                onClick={addLike}
                key={photo.id}
                >LOVE IT</button>
                <p className="likes">{photo.likes} people love this</p>
        </div>
        )
    } else {
    return (
        <div>
            <img onClick={flipDisplay} src={photo.path}/>
            <button 
                onClick={addLike}
                key={photo.id}
                >LOVE IT</button>
                <p className="likes">{photo.likes} people love this</p>
        </div>
    )};
}


export default GalleryItem;