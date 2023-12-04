import React from 'react'
import { useState } from 'react';
import IconHeart from './IconHeart';

const Image = (props) => {

    const {typeGallery, dataImage, handlerLike, handlerShowModalImage}=props;
    const [filled, SetFilled]=useState(dataImage.liked);

    const handlerClick=function(){
      switch (typeGallery) {
        case "home":
          if(filled==false){
            SetFilled(true);
            handlerLike(true, dataImage.id);
          }
          else{
            SetFilled(false);
            handlerLike(false, dataImage.id);
          }
          break;
        case "favorites":
           handlerShowModalImage(dataImage);
          break;
      } 
    }

  return (
    <div style={{backgroundImage:`url(${dataImage.image_medium})`}} className='photo' onClick={handlerClick}>
        {typeGallery=="home"?
        <>
        <IconHeart filled={filled}></IconHeart>
        <p>{dataImage.alt} - <span style={{fontWeight:"bold"}}>{dataImage.photographer}</span></p>
        </>
        :null}
    </div>
  )
}

export default Image