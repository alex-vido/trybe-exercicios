import React from 'react';
import HelloWorld from './components/HelloWord';
import Title from './components/Title';

class App extends React.Component {
  state = {
    course: 'front-end',
    finished: false,
  };

  componentDidMount() {
    console.log('Componente foi montado');
  }

  componentDidUpdate() {
    console.log('Componente atualizado');
  }
  // Caso tivesse um componente loading

  componentWillUnmount() {
    console.log('Componente Loading desmontado');
  }

  handleClick = () => {
    alert('clicou!');
  };

  render() {
    const { course, finished } = this.state;
    return (
      <div className="App">
        <Title titleMessage="Props" />
        <button onClick={ this.handleClick }>Clique!</button>
        <HelloWorld />
        <h1>{`Módulo: ${course}`}</h1>
        <button
          disabled={ finished }
          onClick={ () => this.setState({ finished: true }) }
        >
          Finalizar curso
        </button>
        {finished && <h2>Curso finalizado</h2>}
      </div>
    );
  }
}

export default App;
