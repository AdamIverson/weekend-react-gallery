import { useState } from "react";
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'
import './GalleryItem.css'

// const refreshLikes = ({fetchGallery}) => {
//     fetchGallery();
// }
function GalleryItem({ photo, fetchGallery }) {
    console.log('in GalleryItem');

    // const refreshLikes = ({fetchGallery}) => {
    //     fetchGallery();
    // }

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