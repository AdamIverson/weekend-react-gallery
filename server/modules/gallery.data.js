// this is where the data actually lives
// in this scenario, we set it and forget it
// in future scenarios, we will set it over there in a database and forget it

const galleryItems = [
    
    { 
        id: 1, 
        path: '../images/4x3/june_10_2021_film_b-1.jpg', 
        description: 'one half of the front wheel of a motorcycle and the shadow of the motorcyclist passing under a bridge going zoom zoom zoom up the west river parkway headed downtown to a heavy metal rock and roll bar to hang out with rock and roll pals and drink cold beers with said pals', 
        likes: 0,
        display: true
    },
    { 
        id: 2, 
        path: '../images/4x3/june_10_2021_film_blossoms-1.jpg', 
        description: 'pink spring blossoms minding their own business, unlike my stupid STEPDAD ROGER who my mom met a the elks two frickin stupid years ago when he was playing his stupid clarinet with his stupid polka band the roger harralson experience he smells like stupid mothballs',
        likes: 0,
        display: true
    },
    { 
        id: 3, 
        path: '../images/4x3/june_10_2021_film_orange_cat-2.jpg', 
        description: 'an orange tabby cat lords over green weeds and young trees still thriving in the spring, half past lilac week but preceding droughtfall, no doubt all wishing for a cooler climate to send down roots for future fields to repeat the process of organic eminent domain', 
        likes: 0,
        display: true
    },
    { 
        id: 4, 
        path: '../images/4x3/june_10_2021_tandem-1.jpg', 
        description: 'tandem tandem bicylces and an adult wearing a fun spiky helmet with a poofy poofy purple coat on a bench over by sea salt, a restaurant that i guess makes sense? - the most south minneapolis scene ive ever seen and ive lived here for some time now', 
        likes: 0,
        display: true
    },
    { 
        id: 5, 
        path: '../images/4x3/march_07_2021_-5.jpg', 
        description: 'glove on a stick in the blue winter sky, not lonely or anything. not really even looking to chat. it is nice to be noticed once in a while, though. it is nice to be seen. i guess i find it grounding. i thought I would never find anything grounding, but here we are', 
        likes: 0,
        display: true 
    },
    { 
        id: 6, 
        path: '../images/4x3/strike_prints.2020.proofs.older-7.jpg', 
        description: 'wispy cotton candy san juan summer sunset clouds over the silhouettes of a jogger and some rando meatwad on a onewheel, a particularly unsafe mode of transport made popular by the folks who would rather not walk with their feets but instead straddle one wheel', 
        likes: 0,
        display: true
    }
];

// this is how we send the data out, in this case, on to the component
module.exports = galleryItems;
