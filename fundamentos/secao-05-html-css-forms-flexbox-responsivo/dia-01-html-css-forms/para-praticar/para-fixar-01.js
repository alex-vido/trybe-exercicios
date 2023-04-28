// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const fncPreventDefault = (e) => {
  e.preventDefault();
}

const fncInput = (e) => {
  const letter = e.key;
  if(letter !== 'a') {
    e.preventDefault();
  }
}


HREF_LINK.addEventListener('click', fncPreventDefault);
INPUT_CHECKBOX.addEventListener('click', fncPreventDefault);
INPUT_TEXT.addEventListener('keypress', fncInput)