// this is where the data actually lives
// in this scenario, we set it and forget it
// in future scenarios, we will set it over there in a database and forget it

const galleryItems = [
    
    { 
        id: 1, 
        path: '../images/4x3/june_10_2021_film_b-1.jpg', 
        description: 'one half of the front wheel of a motorcycle and the shadow of the motorcyclist passing under a bridge going zoom zoom zoom', 
        likes: 0,
        display: true
    },
    { 
        id: 2, 
        path: '../images/4x3/june_10_2021_film_blossoms-1.jpg', 
        description: 'pink spring blossoms', 
        likes: 0,
        display: true
    },
    { 
        id: 3, 
        path: '../images/4x3/june_10_2021_film_orange_cat-2.jpg', 
        description: 'an orange cat sits outside with green vegetation', 
        likes: 0,
        display: true
    },
    { 
        id: 4, 
        path: '../images/4x3/june_10_2021_tandem-1.jpg', 
        description: 'tandem tandem bicylces and an adult wearing a fun spiky helmet by sea salt: the most south minneapolis scene ive ever seen', 
        likes: 0,
        display: true
    },
    { 
        id: 5, 
        path: '../images/4x3/march_07_2021_-5.jpg', 
        description: 'glove on a stick in the blue winter sky', 
        likes: 0,
        display: true 
    },
    { 
        id: 6, 
        path: '../images/4x3/strike_prints.2020.proofs.older-7.jpg', 
        description: 'wispy cotton candy san juan summer sunset clouds over the profiles of a jogger and some rando on a onewheel, a particularly unsafe mode of transport', 
        likes: 0,
        display: true
    }
];

// this is how we send the data out, in this case, on to the component
module.exports = galleryItems;
