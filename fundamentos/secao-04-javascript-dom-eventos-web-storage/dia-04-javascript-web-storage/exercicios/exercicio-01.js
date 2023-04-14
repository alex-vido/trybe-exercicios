window.onload = () => {
  const body = document.querySelector('body');
  const bkColor = document.getElementById('background-color');
  const white = bkColor.children[1];
  const black = bkColor.children[2];
  const green = bkColor.children[3];
  const blue = bkColor.children[4];
  const yellow = bkColor.children[5];
  const fntColor = document.getElementById('font-color');
  const fntBlk = fntColor.children[1];
  const fntRed = fntColor.children[2];
  const fntWhite = fntColor.children[3];
  const fntSize = document.getElementById('font-size');
  const size8 = fntSize.children[1];
  const size10 = fntSize.children[2];
  const size12 = fntSize.children[3];
  const size14 = fntSize.children[4];
  const size20 = fntSize.children[5];
  const ltrSpc = document.getElementById('line-height');
  const spc1 = ltrSpc.children[1];
  const spcNormal = ltrSpc.children[2];
  const spc15 = ltrSpc.children[3];
  const spc20 = ltrSpc.children[4];
  const spc30 = ltrSpc.children[5];
  const ff = document.getElementById('font-family');
  const ff1 = ff.children[1];
  const ff2 = ff.children[2];

  const changeBackgroundColor = (e) => {
    body.style.backgroundColor = e.target.innerText;
    localStorage.setItem('backgroundColor', body.style.backgroundColor);
  } 

  const changeColor = (e) => {
    body.style.color = e.target.innerText;
    localStorage.setItem('color', body.style.color);

  } 

  const changeSize = (e) => {
    const phrase = e.target.innerText;
    let size = '';
    for (letter of phrase) {
      if (!isNaN(parseInt(letter))) {
        size += letter
      }
    }
    body.style.fontSize = `${size}px`;
    localStorage.setItem('fontSize', size);
  }

  const changeSpacing = (e) => {
    const content = e.target.innerText;
    let size = '';
    for (str of content) {
      if (!isNaN(parseInt(str)) && str !== '.') {
        size += str;
      } else if (isNaN(parseInt(str))) {
        size = content
        body.style.letterSpacing = size;
      }
    }
    body.style.letterSpacing = `${size}px`;
    localStorage.setItem('letterSpacing', size);    
  }

  const changeFF = (e) => {
    body.style.fontFamily = e.target.innerText; 
    localStorage.setItem('fontFamily', body.style.fontFamily);    
  }

  white.addEventListener('click', changeBackgroundColor);
  black.addEventListener('click', changeBackgroundColor);
  white.addEventListener('click', changeBackgroundColor);
  green.addEventListener('click', changeBackgroundColor);
  blue.addEventListener('click', changeBackgroundColor);
  yellow.addEventListener('click', changeBackgroundColor);
  fntBlk.addEventListener('click', changeColor);
  fntRed.addEventListener('click', changeColor);
  fntWhite.addEventListener('click', changeColor);
  size8.addEventListener('click', changeSize);
  size10.addEventListener('click', changeSize);
  size12.addEventListener('click', changeSize);
  size14.addEventListener('click', changeSize);
  size20.addEventListener('click', changeSize);
  spc1.addEventListener('click', changeSpacing);
  spcNormal.addEventListener('click', changeSpacing);
  spc15.addEventListener('click', changeSpacing);
  spc20.addEventListener('click', changeSpacing);
  spc30.addEventListener('click', changeSpacing);
  ff1.addEventListener('click', changeFF);
  ff2.addEventListener('click', changeFF);

  const getBackgroundColor = localStorage.getItem('backgroundColor');
  if (getBackgroundColor) {
    body.style.backgroundColor = getBackgroundColor;
  }

  const getColor = localStorage.getItem('color')
  if (getColor) {
    body.style.color = getColor;
  }

  const getFontSize = localStorage.getItem('fontSize');
  if (getFontSize) {
  body.style.fontSize = `${getFontSize}px` 
}

  const getLetterSpacing = localStorage.getItem('letterSpacing')
  if (getLetterSpacing && getLetterSpacing === 'normal') {
    body.style.letterSpacing = getLetterSpacing
  } else if (getLetterSpacing){
    body.style.letterSpacing = `${getLetterSpacing}px`
  }

  const getFontFamily = localStorage.getItem('fontFamily');
  if (getFontFamily) {
    body.style.fontFamily = getFontFamily;
  }
}