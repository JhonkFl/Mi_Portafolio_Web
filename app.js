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
        const correo = "correo@example.com";
        const asunto = "Hola";
        const cuerpo = "Escribe tu mensaje aquí";
        const enlace = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

        window.location.href = enlace;
    });

}