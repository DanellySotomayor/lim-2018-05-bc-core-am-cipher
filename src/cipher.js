window.cipher = {
  encode: (offset, string) => {
    let key = parseInt(offset); //definimos la variable 'Key' para obtener el número de saltos en el alfabeto
    let mensajeCifrado = ''; //definimos variable para obtener el mensaje cifrado final
    let nuevoCaracter = ''; //definimos variable para obtener la letra cifrada
      for (let lista = 0; lista < string.length; lista++) { //busca la posición de la letra en el string ingresado
        let codigoLetra = string.charCodeAt(lista); //convierte a codigo ascii cada letra ingresada
        if (codigoLetra>=65 && codigoLetra<=90) { //tomamos el rango del alfabeto en mayúscula para operar la fórmula siguiente
          nuevoCaracter = String.fromCharCode((codigoLetra - 65 + key)%26 + 65); //fórmula que cifra el código ascii según el offset
          mensajeCifrado += nuevoCaracter; //retorno de la letra cifrada
        } else if (codigoLetra >= 97 && codigoLetra <= 122) {
          nuevoCaracter = String.fromCharCode((codigoLetra - 97 + key)%26 + 97) //rango en letras minúsculas
          mensajeCifrado += nuevoCaracter;
        } else if (codigoLetra >= 48 && codigoLetra <= 57) {
          nuevoCaracter = String.fromCharCode((codigoLetra - 48 + key)%10 + 48) //rango en números
          mensajeCifrado += nuevoCaracter;
        } else {
          nuevoCaracter = String.fromCharCode(codigoLetra); //
          mensajeCifrado += nuevoCaracter;
          }
      }
      return mensajeCifrado;    
  },
   
  decode: (offset, string) => {
    let key = parseInt(offset); 
    let mensajeDescifrado = '';
    let nuevoCaracterDos = '';
      for (let indice = 0; indice < string.length; indice++) {
        let codigoLetraDos = string.charCodeAt(indice); 
        if (codigoLetraDos>=65 && codigoLetraDos<=90) {
          nuevoCaracterDos = String.fromCharCode((codigoLetraDos - 90 - key)%26 + 90);
          mensajeDescifrado += nuevoCaracterDos;
        } else if (codigoLetraDos >= 97 && codigoLetraDos <= 122) {
          nuevoCaracterDos = String.fromCharCode((codigoLetraDos-122 - key)%26 + 122)
          mensajeDescifrado += nuevoCaracterDos;
        } else if (codigoLetraDos >= 48 && codigoLetraDos <= 57) {
          nuevoCaracterDos = String.fromCharCode((codigoLetraDos-57 - key)%10 + 57)
          mensajeDescifrado += nuevoCaracterDos;
        } else {
          nuevoCaracterDos = String.fromCharCode(codigoLetraDos);
          mensajeDescifrado += nuevoCaracterDos;
        }
      }
      return mensajeDescifrado;
  },

  //createCipherWithOffset(offset) { //offset fijo
   // let objetoSolicitado = { //declaramos un objeto con dos métodos
     // encode:(string) =>  //método o función uno
    //    cipher.encode(offset, string), //funcion encode indicada arriba

    //  decode:(string) => //método o función dos
    //    cipher.decode(offset, string) //funcion decode indicada arriba
  //  }
   // return objetoSolicitado; //la función createCipherWithOffset retorna el objeto objetoSolicitado. Siguiendo el ejemplo de Shiro.
 // }

}