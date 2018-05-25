window.cipher = {
  // ... 
};

document.getElementById('resetear').onclick = resetear;

function resetear() {
  
  // document.querySelector('#primerMensaje').value = '';
  // document.querySelector('#segundoMensaje').value = '';
  document.getElementById('#resultado').value = '';

}

function encriptado() {
  let primerMensaje = document.querySelector('#primerMensaje').Value.toUpperCase() || 'Hola';
  let segundoMensaje = document.querySelector('#segundoMensaje');
  let key = document.querySelector('#key');
  let cipherArray = new Array();
  [...primerMensaje].forEach(char => {
      if (char.charCodeAt() == 32) {
        cipherArray.push(32);
      } else {
        charNumber = char.charCodeAt() - 65;
        cipherChar = (charNumber + parseInt(key.value)) % 26;
        cipherArray.push(cipherChar + 65);
      }
  })
  document.getElementById('resultado').value = String.fromCharCode(...cipherArray);

}
