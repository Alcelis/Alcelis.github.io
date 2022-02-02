const heladeria = document.querySelector('.helados');

heladeria.addEventListener('change', (event) => {
    const imagen_helado = document.getElementById('img-helado');

    if(heladeria.value == 'Maracuya'){
        imagen_helado.src = './imagen/Parchita.png';
    }else if(heladeria.value =='Sandia'){
        imagen_helado.src = './imagen/Sandia.png';
    }else if(heladeria.value =='Kiwi'){
        imagen_helado.src = './imagen/Kiwi.png';
    }else if(heladeria.value =='Durazno'){
        imagen_helado.src = './imagen/Durazno.png';
    }
    imagen_helado.style.width = '50px';
});
//contenedores donde se 'almacena' la informacion
function comprar(){
    //traer informacion 
    let nombre= document.getElementById('name');
    let apellido= document.getElementById('lastname');
    let direccion= document.getElementById('direccion');
    let contacto= document.getElementById('contact');
    let icecream= document.querySelector('.helados');

    let nombre_factura= document.getElementById('f-name');
    let apellido_factura= document.getElementById('f-lastname');
    let direccion_factura= document.getElementById('f-direccion');
    let contacto_factura= document.getElementById('f-contact');
    let helado_factura= document.getElementById('f-helado');

    nombre_factura.innerHTML= nombre.value;
    apellido_factura.innerHTML= apellido.value;
    direccion_factura.innerHTML= direccion.value;
    contacto_factura.innerHTML= contacto.value;
    helado_factura.innerHTML= icecream.value;
console.log(nombre.value + apellido.value + direccion.value + contacto.value + icecream.value);

}
