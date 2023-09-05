import './App.css'
import Form from './components/form'
import useToggle from './hooks/useToggle';

function App() {
  const toggle = useToggle(false);
  
  return (
    <>
    { toggle.value ? (
      <Form toggle={toggle.toggleValue} />
    ) : (
      <button
        onClick={toggle.toggleValue}>Cadastre-se agora!
      </button>
    )}
    </>
  )
}

export default App
