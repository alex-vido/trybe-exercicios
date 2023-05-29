import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { calculateAge } from './utils/age';

function HelloWorld() {
  const name = 'Alex Vido';
  const birth = '12/07/1993';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}

export default HelloWorld;
