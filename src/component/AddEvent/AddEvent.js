import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL]=useState(null)
    const onSubmit = data => {
     const eventData={
         name: data.name,
         imageURL:imageURL
     }
      const url=`http://localhost:5055/addEvent`
      
      fetch(url,{
          method:'POST',
          headers:{
              'content-type' : 'application/json'
          },
          body:JSON.stringify(eventData)
      })
      .then(res=>{
          console.log('server side data',res);
      })
    }



    const handleImage=event=>{
        console.log(event.target.files[0]);
        const imageData=new FormData();
        imageData.set('key','3b8fa16325c0baa1794c79a7349a090d')
        imageData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  
    return (
        <div>
            <h1>add your awesome event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue="New exciting Event" ref={register} /> <br/>
      <input name="exampleRequired" type="file" onChange={handleImage}   /> <br/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddEvent;