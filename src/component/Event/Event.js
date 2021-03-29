import React from 'react';
import './Event.css'

const Event = (props) => {
    const {imageURL,name}=props.imgItem
    const deleteEvent=id=>{
        console.log('delete');
    }
    return (
        <div className='flex'>
        
            <div className="img-div">
            <img src={imageURL} alt=""/>
            <h4>{name}  <button onClick={()=>deleteEvent(props._id)}>delete</button></h4>

            </div>
        </div>
    );
};

export default Event;