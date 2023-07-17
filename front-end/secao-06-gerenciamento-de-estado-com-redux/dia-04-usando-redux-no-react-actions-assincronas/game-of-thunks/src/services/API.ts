const getCharacter = async (characterName: string) => {
  const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName}`);
  const data = await response.json();

  return data;
};

export default getCharacter;
