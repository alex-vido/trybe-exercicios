export type CharacterType = {
  name: string,
  gender: string,
  titles: string[],
  born: string,
  culture: string,
  aliases: string[],
};

export type CharacterState = {
  isLoading: boolean,
  character: CharacterType,
  error: string | null,
};

export type Dispatch = (action: CharacterAction) => void;
