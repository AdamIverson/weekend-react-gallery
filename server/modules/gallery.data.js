// this is where the data actually lives
// in this scenario, we set it and forget it
// in future scenarios, we will set it over there in a database and forget it

const galleryItems = [
    
    { 
        id: 1, 
        path: '../images/june_10_2021_film_b-1.jpg', 
        description: 'one half of the front wheel of a motorcycle and the shadow of the motorcyclist passing under a bridge', 
        likes: 0 
    },
    { 
        id: 2, 
        path: '../images/june_10_2021_film_blossoms-1.jpg', 
        description: 'pink spring blossoms', 
        likes: 0 
    },
    { 
        id: 3, 
        path: '../images/june_10_2021_film_orange_cat-2.jpg', 
        description: 'an orange cat sits outside with green vegetation', 
        likes: 0 
    },
    { 
        id: 4, 
        path: '../images/june_10_2021_tandem-1.jpg', 
        description: 'the most south minneapolis thing ive ever seen', 
        likes: 0 
    },
    { 
        id: 5, 
        path: '../images/march_07_2021_-5.jpg', 
        description: 'glove on a stick in the blue sky', 
        likes: 0 
    },
    { 
        id: 6, 
        path: '../images/R1-01224-0015.jpg', 
        description: 'an old friend drinks a drink in a steakhouse in old saint paul', 
        likes: 0 
    }
];

// this is how we send the data out, in this case, on to the component
module.exports = galleryItems;
