import logo from './logo.svg';
import './App.css';
import Cartao from './components/Cartao';
import Comp1 from './components/Comp1';

function App() {
  return (
    <div className="App">
      <Cartao
          Titulo= "Meu novo Titulo"
          Subtitulo= " jfgbnv rjs vedfubnia bdfg"
          Foto= "https://via.placeholder.com/200"

      />
      <Comp1
      Pick= "data:image/jpeg;base64,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"
      Title= "Chevrolet Cruze" 
      Desc= "A Concessionária que Oferece a Linha Completa da Chevrolet Para Você Adquirir Seu Carro. Descubra o que só a líder em vendas tem. Acesse o site e tenha o seu Chevrolet. Confira nossas Ofertas."
      Price = "Preço sugerido: 79.890,00" 
      Power = "Potência: 120 cavalos" 
      Link = "https://www.google.com/search?q=chevrolet+onix&source=lmns&rlz=1C1GCEU_pt-BRBR973BR973&hl=pt-BR&sa=X&ved=2ahUKEwimtOiPsMyEAxX2N7kGHS3MAW0Q_AUoAHoECAEQAA" 
      />
    </div>
  );
}

export default App;
