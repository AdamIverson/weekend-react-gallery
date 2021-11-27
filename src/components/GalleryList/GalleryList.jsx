import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

// second tier, below App
// something isn't working - if the data is coming in, it is not as an array


function GalleryList({ galleryList, fetchGallery }) {

    // const passingLikes = ({fetchGallery}) => {
    //     fetchGallery();
    // }

    return (
        <ul>
            {galleryList.map(photo => (
                <li key={photo.id}>
                    <GalleryItem  fetchGallery={fetchGallery} photo={photo}/>
                </li>
            ))}
        </ul>
    ) 
}

export default GalleryList;