window.cipher = {

  encode:(offset, string) => {
      offset = parseInt(offset); //para obtener el número
      let mensajeCifrado = '';

      for (let lista = 0; lista < string.length; lista++) { 
          let codigoLetra = string.toUpperCase().charCodeAt(lista); 
          let codigoCifrado = (codigoLetra - 65 + offset)%26 + 65;
          let nuevoCaracter = String.fromCharCode(codigoCifrado); //conviente el nuevo ascii a string
          mensajeCifrado = mensajeCifrado + nuevoCaracter;
      }
      return mensajeCifrado;
  },

  decode: (offset, string) => {
    offset = parseInt(offset);
    let mensajeDescifrado = '';

    for (let lista = 0; lista < string.length; lista++) {
        let codigoLetra = string.toUpperCase().charCodeAt(); 
        let codigoCifrado = (codigoLetra + 65 - offset)%26 + 65;
        let nuevoCaracter = String.fromCharCode(codigoCifrado);
        mensajeDescifrado += nuevoCaracter;
      }
  
    return mensajeDescifrado;
  }
}