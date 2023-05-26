import Swal from 'sweetalert2'

const input = document.getElementById('input');
const button = document.getElementById('button');
const info = document.getElementById('info');

export const addCepInfo = async () => {
  const cep = input.value;
  const API_URL = `https://viacep.com.br/ws/${cep}/json/`;
  try{
    if (cep.length === 0) {
      throw new Error('Você precisa passar um CEP');
    }
    const result = await fetch(API_URL);
    const data = await result.json();
    info.innerText = JSON.stringify(data);
  } catch (e) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: e.message
    })
  };
};

button.addEventListener('click', addCepInfo);
