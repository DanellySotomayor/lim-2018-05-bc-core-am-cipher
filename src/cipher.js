window.cipher = {

encode:function(offset, string){
  let mensajeCifrado = '';

  for (let index = 0; index < string.lenght; index++){
      let codigoLetra = string.charCodeAt(index);
      let codigoCifrado = (codigoLetra - 65 + offset)%26 + 65;
      let nuevoCaracter = String.fromCharCode(codigoCifrado);
      mensajeCifrado = mensajeCifrado + nuevoCaracter;
  }

  return mensajeCifrado;
}

};