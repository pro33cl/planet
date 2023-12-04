import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';


export const LikeContext= createContext();

const ImagesLikeProvider = ({children}) => {

    const urlPhotos= "/photos.json";
    const objectImageInit= {id:0, image_medium:"", image_original:"", alt:"", photographer:"", liked:false};

    const [dataImages, SetDataImages]=useState([]);
    const [showModalImage, SetShowModalImage]=useState(false);
    const [activeModalImage, SetActiveModalImage]=useState(objectImageInit);

    useEffect(()=>{
      getDataApi();
    },[]);

    const getDataApi= async function(){
      const res= await fetch(urlPhotos);
      const dataApi= await res.json();
      let dataApiFormated= formatData(dataApi);
      SetDataImages(dataApiFormated);
    }

    const formatData=function(dataApi){
      let data= [];
      let apiPhotos= dataApi.photos;
      apiPhotos.forEach((photo)=>{
        data.push({id:photo.id, image_medium:photo.src.medium, image_original:photo.src.original, alt:photo.alt, photographer:photo.photographer, liked:false});
      });
      return data;
    }

    const handlerLike=function(answer,idImage){
      SetDataImages(dataImages.map((photo)=>{
        if(photo.id===idImage){
          return {...photo, liked:answer};
        }
        else{
          return photo;
        }
      }));
    }

    const handlerShowModalImage=function(dataImage){
      SetShowModalImage(true);
      SetActiveModalImage(dataImage);
    }

    const handlerCloseModalImage=function(){
      SetShowModalImage(false);
    }

    
    const windowModal=function(){
      return(
        <Modal show={showModalImage} onHide={handlerCloseModalImage}>
          <Modal.Header closeButton>
            <Modal.Title>{activeModalImage.alt}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={activeModalImage.image_original} fluid />
            <p className='fs-6 fw-bold'>Fotógrafo: {activeModalImage.photographer}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handlerCloseModalImage}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
   
  return (
        <LikeContext.Provider value={{dataImages, handlerLike, handlerShowModalImage, windowModal}}>
            {children}
        </LikeContext.Provider>
  )
}

export default ImagesLikeProvider;