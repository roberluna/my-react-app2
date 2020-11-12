import Parrafo from './components/Parrafo'
import Contador from './components/Contador'
import Post from './components/Post'
import Foco from './components/Foco'

function App() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <Parrafo></Parrafo>
      <Parrafo></Parrafo>
      <hr/>
      <Contador></Contador>
      <Post></Post>
      <Foco lugar="recamara"></Foco>
      <Foco lugar="cocina"></Foco>
      <Foco lugar="comedor"></Foco>
    </div>
  );
}

export default App;
