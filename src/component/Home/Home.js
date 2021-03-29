import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [images,setImages]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5055/events')
        .then(res=>res.json())
        .then(data=>setImages(data))

    },[0])
    return (
        <div>
            <h1>hello</h1>
           {
               images.map(image=><Event imgItem={image}></Event>)
           }
        </div>
    );
};

export default Home;