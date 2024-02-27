import logo from './logo.svg';
import './App.css';
import Cartao from './components/Cartao';

function App() {
  return (
    <div className="App">
      <Cartao
          Titulo= "Meu novo Titulo"
          Subtitulo= " jfgbnv rjs vedfubnia bdfg"
          Foto= "https://via.placeholder.com/200"

      />
      <Cartao
          Titulo= "Meu novo Titulo 2"
          Subtitulo= " jfgbnv rjs vedfubnia bdfg"
          Foto= "https://via.placeholder.com/100"

      />
    </div>
  );
}

export default App;
