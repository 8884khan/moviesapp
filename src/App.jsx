import Header from "./components/Header";
import Movies from "./components/Movies";
import jmovie from "./jmovie.json";
import About from './components/About'
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />

        <div className="main">
          {
            jmovie.map((element) => {
            return(
              <Movies
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
            )
            
          })
        }
        </div>

        <About></About>

        <Footer></Footer>

      </div>
    </>
  );
}

export default App;
