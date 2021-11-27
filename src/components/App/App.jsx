import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import './App.css';

function App() {
  // const [likeCount, setLikeCount] = useState(0);
  // const updateLikeTotal = (likeChange) => {
  //   setLikeCount(likeCount + likeChange);
  // }
// intended to hold data in a piece of state that can be passed to children
// this took a while to get here
// things got personal and im still not certain that it belongs here
// pretty strong sense that it goes here
  const [galleryList, setGalleryList] = useState([]);

  // const updateGalleryList = (event) => {
  //   setGalleryList(galleryList);
  // }

  // this bb makes sure fetchGallery only runs once on load and not ad nauseum
  useEffect(() => {
    fetchGallery();
  }, []);

  // this is the big old overarching function of doom
  // everything runs through fetchGallery
  const fetchGallery = () => {

    // well well well if it isn't axios
    // pretty familiar format
    // damn shame everything goes to shit here
    // the console log tells quite a story
    // for one, it refreshes all the time bc this is react
    // two, the response is coming back in full, as an array of objects as logged on line 32
    // setGalleryList works, but not as quickly as it needs to?
    // the first array comes back empty - is that a problem? it feels like a problem
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('got a response', response.data);
      setGalleryList(response.data);
      // console.log('galleryList: why is it empty?', galleryList);
    }).catch((error) => {
      console.log('GET /gallery failed', error);
    });
  };


  // const addLike = () => {
  //   axios({
  //     method: 'PUT',
  //     url: `/gallery/like/${photo.id}`
  //   }).then((response) => {
  //     console.log(photo.likes);
  //     fetchGallery();
  //   }).catch((error) => {
  //     console.log('PUT route failed');
  //   });
  // };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery List</p>
        {/* this is where GalleryList goes for sure
        this is where we pass props to GalleryList
        things go downhill here, but im not 100% galleryList is correct */}
        <GalleryList galleryList={galleryList} fetchGallery={fetchGallery}/>
        {/* <img src="../images/goat_small.jpg"/> */}
      </div>
    );

}

export default App;
