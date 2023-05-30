import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';
import PastResults from './components/PastResults';
import LottoNumbers from './components/LottoNumbers';

import './App.css';
import Button from './components/Button';

function App() {
  return (
    <>
      <Greeting person={ { firstName: 'Alex', lastName: 'Vido' } } />
      <LuckyNumbers />
      <PastResults />
      <Button>Texto</Button>
      <LottoNumbers numbers={ [6, 33, 54, 7, 8, 28] } />
    </>
  );
}

export default App;
