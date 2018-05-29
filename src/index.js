
    //boton codificar
    let codificar = document.getElementById('codificar');
    codificar.addEventListener('click', () => {
        let offset = parseInt(document.getElementById('llave').value);
        let ingresaMensaje = document.getElementById('mensajePrincipal').value;
        let encode = cipher.encode(offset, ingresaMensaje);
        document.getElementById('resultado').innerHTML = encode;
    });

    //boton decodificar
    let decodificar = document.getElementById('decodificar');
    codificar.addEventListener('click', () => {
        let offset = parseInt(document.getElementById('llave').value);
        let ingresaMensaje = document.getElementById('mensajePrincipal').value;
        let encode = cipher.decode(offset, ingresaMensaje);
        document.getElementById('resultado').innerHTML = decode;

    });

    //limpiar las áreas de texto
    let resetear = document.getElementById('resetear');
    resetear.addEventListener('click', () => {
        document.getElementById('llave').value = '';
        document.getElementById('mensajePrincipal').value = '';
        document.getElementById('resultado').innerHTML = '';
   
     });