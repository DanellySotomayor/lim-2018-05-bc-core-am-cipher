window.cipher = {

  encode:(offset, string) => {
      offset = parseInt(offset); //para obtener el número
      let mensajeCifrado = '';

      for (let lista = 0; lista < string.length; lista++) { //busca la posición de la letra en el string
          let codigoLetra = string.toUpperCase().charCodeAt(lista); //convierte a mayúscula y a codigo ascii
          if (codigoLetra === 32) { //identifica el espacio segun el codigo ascii
             mensajeCifrado += ' ' //devuelve espacio en string
          } else {
          let codigoCifrado = (codigoLetra - 65 + offset)%26 + 65; //fórmula para obtener el nuevo caracter
          let nuevoCaracter = String.fromCharCode(codigoCifrado); //convierte el nuevo caracter ascii a string
          mensajeCifrado = mensajeCifrado + nuevoCaracter; //devuelve el nuevo caracter en string
    }
  }

      return mensajeCifrado;
  },
 
  decode: (offset, string) => {
    offset = parseInt(offset); 
    let mensajeDescifrado = '';

    for (let indice = 0; indice < string.length; indice++) {
        let codigoLetraDos = string.toUpperCase().charCodeAt(indice); 
        if (codigoLetraDos === 32) {
            mensajeDescifrado += ' '
       } else {
        let codigoDescifrado = (codigoLetraDos + 65 - offset)%26 + 65;
        let nuevoCaracterDos = String.fromCharCode(codigoDescifrado);
        mensajeDescifrado += nuevoCaracterDos;
      }
    }
    return mensajeDescifrado;
}
}