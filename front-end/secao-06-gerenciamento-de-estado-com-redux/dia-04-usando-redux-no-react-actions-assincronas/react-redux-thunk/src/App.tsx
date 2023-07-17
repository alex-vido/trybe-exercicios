import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from './types';
import { fetchDogImage } from './redux/actions';
import './App.css';

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  if (rootState.isFetching) return <p>Carregando...</p>;

  return (
    <div
      className="card"
    >
      {
        rootState.imageURL
        && <img
          src={ rootState.imageURL }
          alt="Imagem de um cachorro aleatório"
        />
      }
      <button
        onClick={ () => { dispatch(fetchDogImage()); } }
      >
        Novo Doguinho
      </button>
    </div>
  );
}

export default App;
