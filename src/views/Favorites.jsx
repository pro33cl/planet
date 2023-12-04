import Gallery from "../components/Gallery";

const Favorites = () => {

  const typeGallery="favorites";

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
          <Gallery typeGallery={typeGallery}/>
    </div>
  );
};
export default Favorites;
