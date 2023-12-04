import { useContext} from "react";
import Image from "./Image";
import { LikeContext } from "../contexts/LikeContext";


const Gallery = (props) => {

  const {typeGallery}=props;

  const {dataImages, handlerLike, handlerShowModalImage, windowModal} =useContext(LikeContext);

  return (
    <>
      <div className="gallery grid-columns p-3">
      {
        dataImages.map((photo)=>{
          if(typeGallery=="home" || (typeGallery=="favorites" && photo.liked==true)){
            return(<Image typeGallery={typeGallery} dataImage={photo} handlerLike={handlerLike} handlerShowModalImage={handlerShowModalImage} key={photo.id}></Image>);
          }
        })
      }
      </div>
      {windowModal()}
    </> 
  );
};

export default Gallery;
