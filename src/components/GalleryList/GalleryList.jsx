import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

// second tier, below App
// something isn't working - if the data is coming in, it is not as an array


function GalleryList({galleryList}) {
    return (
        <ul>
            {galleryList.map(photo => (
                <li key={photo.id}>
                    <GalleryItem photo={photo}/>
                </li>
            ))}
        </ul>
    )
}

export default GalleryList;