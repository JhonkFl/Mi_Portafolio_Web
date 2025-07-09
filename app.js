let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function gmail(){
    document.getElementById("gmail").addEventListener("click",function(){
        const correo = "mariohernandez4018h@gmail.com";
        const asunto = "Hola";
        const cuerpo = "Escribe tu mensaje aquí";
        const enlace = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

        window.location.href = enlace;
    });
}

document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("contactoMsg");

    formulario.addEventListener("submit",function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const puesto = document.getElementById("puesto").value;
        const mensaje = document.getElementById("mensaje").value;

        const telefono = "5217461082972"
        const texto = `Hola, soy ${nombre}. Y soy ${puesto} : ${mensaje}`;
        alert("Gracias por tu mensaje "+nombre+" Nos pondremos en contacto!!");
        const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

        window.open(enlace, "_blank");
        formulario.reset();
    })
});