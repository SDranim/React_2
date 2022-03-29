import './App.css';
import image from "./imageInSrc.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>
      <h1 className='title red'>SunSet</h1>
      <img src={image} alt='ss1' ></img>
      <img src='/imageInPublic.jpg' alt='ss2' ></img>
    </div>

<video src='' alt='vid'  type='video/mp4' style={{width:"320" , height:"240"}}></video>

    </>
  );
}

export default App;
