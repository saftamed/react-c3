/* eslint-disable jsx-a11y/alt-text */
import './App.css';

function App() {
  let name = "Zlatan Ibrahimovic";
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">{name}</h1>
        <div>
        <img src="/imgs/z1.jpg" ></img>
        </div>
        <div>
        <img src="/imgs/z2.jpg" ></img>
        </div>
      </div>
      <video width="640" height="480" controls>
        <source src="/videos/z1.mp4" type="video/mp4" ></source>
        </video>
    </div>
  );
}

export default App;
