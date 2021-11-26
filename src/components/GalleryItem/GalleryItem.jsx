import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'
import './GalleryItem.css'
// import galleryItems from "../../../server/modules/gallery.data";

function GalleryItem({photo, fetchGallery}) {
    console.log('in GalleryItem');
    // const [displayPhoto, setDisplayPhoto] = useState({photo.path})
    
    // const showWords = (event) => {
    // //     if(setDisplayPhoto({photo.description})
    // }
    const addLike = (event) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${photo.id}`
        }).then((response) => {
            console.log(photo.likes);
        }).catch((error) => {
            console.log('PUT route failed');
        }); 
    };


    return (
        <div>
            <img  src={photo.path}/>
            <button 
                onClick={addLike}
                key={photo.id}
                >love it!</button>
                <p>{photo.likes} people love this</p>
        </div>
    )
}

export default GalleryItem;