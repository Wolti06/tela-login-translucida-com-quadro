'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const txtUsername = document.getElementById('nome'); // mapeando html buscando no document um elemento com o id nome
  const txtPassword = document.getElementById('senha');
  const btnSignin = document.querySelector('button'); // procura primeiro button que existe na tela

  btnSignin.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (txtUsername.value === 'teste' && txtPassword.value === '123456') {
      window.location.href = './claus.html';
    } else {
      alert('Usuário ou senha inválidos');
    }
  });
});