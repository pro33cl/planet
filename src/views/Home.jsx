import Gallery from "../components/Gallery";

const Home = () => {
  
  const typeGallery="home";

  return (
    <div className="App">
      <h1>Natural Pic</h1>
          <Gallery typeGallery={typeGallery}/>
    </div>
  );
};
export default Home;
