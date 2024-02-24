import './App.css'; // Asegúrate de tener tus estilos CSS en este archivo
import Image1 from './assets/1.jpeg';
import Image2 from './assets/2.jpeg';
import Image3 from './assets/3.jpeg';
import Image4 from './assets/4.jpeg';
 
function App() {
  return (
    <div className="app-container">
      <h1 className="title">Karen y Gus</h1>
      <div className="image-scroll">
        <img src={Image1} alt="Imagen 1" />
        <img src={Image2} alt="Imagen 2" />
        <img src={Image3} alt="Imagen 3" />
        <img src={Image4} alt="Imagen 4" />
      </div>
    </div>
  );
}

export default App;
