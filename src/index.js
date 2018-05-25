let codificar = document.getElementById('codificar');
codificar.addEventListener('click',() => {
    let offset = document.getElementById('key').value;
    let ingresaMensaje = document.getElementById('mensajePrincipal').value;
    let encode = cipher.encode(offset, ingresaMensaje);
    document.getElementById('resultado').value = encode;
});
