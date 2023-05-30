import { AiOutlineMail } from 'react-icons/ai';
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Title from './components/title';
import booksList, { bestSerie } from './assets/data';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          Meus livros:
          {' '}
          <s>Livros emprestados</s>
        </Title>
        <ul className="books-list">
          {booksList.map((book) => (
            <Book key={ book.title } book={ book } />
          ))}
        </ul>
      </div>
      <Title>
        { bestSerie }
      </Title>
      <img src="/vite.svg" alt="vite simbol" />
      <AiOutlineMail />
      <Footer />
    </div>
  );
}

export default App;
