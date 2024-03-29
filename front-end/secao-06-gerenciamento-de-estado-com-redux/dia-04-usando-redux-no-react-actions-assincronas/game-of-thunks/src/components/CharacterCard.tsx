import { useSelector } from 'react-redux';
import { CharacterState } from '../types';

function CharacterCard() {
  const { character, isLoading, error } = useSelector((state: CharacterState) => state);

  if (!isLoading && character) {
    return (
      <ul>
        <li>
          Name:
          {' '}
          {character.name}
        </li>
        <li>
          Born:
          {' '}
          {character.born}
        </li>
        <li>
          Titles:
          <ol>
            {character.titles.map((title: string) => (
              <li key={ title }>{title}</li>
            ))}
          </ol>
        </li>
        <li>
          Aliases:
          <ol>
            {character.aliases.map((alias: string) => (
              <li key={ alias }>{alias}</li>
            ))}
          </ol>
        </li>
      </ul>
    );
  }
  if (error) { return <div>{error}</div>; }
  if (isLoading) { return <h3>Loading...</h3>; }
  return <div>Type a character name and click to search!</div>;
}

export default CharacterCard;
