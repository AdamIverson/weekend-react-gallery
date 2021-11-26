import { useState } from "react";
// import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios'
import './GalleryItem.css'

function GalleryItem({photo}) {
    console.log('in GalleryItem');
    const [likeCount, setLikeCount] = useState(0)
    const addLike = (event) => {
        // const [likeCount, setLikeCount] = useState(0)

        axios({
            method: 'PUT',
            url: '/gallery/like/:id'
        }).then((response) => {
            console.log('should i get a response from a PUT route');
            console.log('new like total', likeCount);
            setLikeCount(likeCount + 1);
        }).catch((error) => {
            console.log('PUT route failed');
        }); 
    };


    return (
        <div>
            <img src={photo.path}/>
            <button 
                onClick={addLike}
                key={photo.id}
                >love it!</button>
                <p>{likeCount} people love this</p>
        </div>
    )
}

export default GalleryItem;