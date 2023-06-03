import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { useState } from 'react';
// import image from './assets/react.svg'

function App() {
// const [showImg, setShowImg] = useState(true);
// function handleClick() {
// setShowImg(!showImg);
// }

const toolKit = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'Node',
  'Testes automatizados',
];

const [index, setIndex] = useState(0);
const [toolList, setToolList] = useState(toolKit);

function handleNextClick() {
if (index + 1 < toolKit.length) {
setIndex(index + 1);
} else {
setIndex(0); // Volta para o primeiro elemento
}
}

function handlePreviousClick() {
  if (index - 1 >= 0) {
  setIndex(index - 1);
  } else {
    setIndex(toolList.length - 1); // Vai para o último elemento
  }
}

const [inputValue, setInputValue] = useState('');

function handleAddClick() {
  if (inputValue) {
    setToolList([...toolList, inputValue]);
  }
}

return (
<>
<Button />
<Input />
{/* <div>
{showImg && <img src={image} />}
<button onClick={handleClick}>
{showImg ? 'Esconder imagem' : 'Mostrar imagem'}
</button>
</div> */}
<h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
<h2>{toolList[index]}</h2>
<button onClick={handlePreviousClick}>Anterior</button>
<button onClick={handleNextClick}>Próximo</button>
<section>
  <h3>Adicione novas ferramentas:</h3>
  <input onChange={({ target }) => setInputValue(target.value)} />
  <button onClick={ handleAddClick }>Adicionar</button>
</section>
<section>
        <h3>Lista de itens do carrossel:</h3>
        <ul>
          {toolList.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </section>
</>
)
}

export default App;
