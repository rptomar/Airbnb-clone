import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ImageContainer from './components/imageContainer';
import ImageCard from './components/imageCard';


function App() {
  return (
    <div>
      <div style={{marginTop:'10px'}}>
         <Header/>
      </div>
      <div style={{margin:'15px',padding:'10px'}}>
         <ImageContainer/>
      </div>
      <div style={{margin:'15px',padding:'10px'}}>
         <ImageCard/>
      </div>
    </div>
  );
}

export default App;
