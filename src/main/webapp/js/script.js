let inputMostrado=false;

window.addEventListener("keydown", function(event) {
    if (event.keyCode ==13) {
        event.preventDefault();

    }
}, false);

/*window.addEventListener("keydown", function(event) {
    if (event.keyCode ==18) {
            alert("Presionaste alt izquierdo")

    }
}, false);*/

window.onload=function (){
    document.querySelector("#valorAbs").addEventListener("click",valorAbs);
    document.querySelector("#redondesoSup").addEventListener("click",redondesoSup );
    document.querySelector("#exponente").addEventListener("click",exponente );
    document.querySelector("#max").addEventListener("click",max);
    document.querySelector("#min").addEventListener("click", min);
    document.querySelector("#redondeo").addEventListener("click",redondeo );
    document.querySelector("#raizC").addEventListener("click", raizC);
    document.querySelector("#truncar").addEventListener("click",truncar );


}
function crearBoton(){
    let formulario = document.querySelector("form");
    let boton = document.createElement("button")
    boton.setAttribute("type", "button");
    boton.setAttribute("id", "calculo1");
    boton.classList.add("boton");
    boton.textContent = "Calcular";
    formulario.appendChild(boton);
}
function eliminarBoton(){
    document.querySelector("#calculo1").remove();
}
function crearInput1(){
    let formulario = document.querySelector("form");
    let entrada = document.createElement("input");
    entrada.setAttribute("id", "numero1");
    entrada.setAttribute("type", "text");
    entrada.setAttribute("placeholder", "Escribe un número")
    formulario.appendChild(entrada);
}
function crearInput2(){
    let formulario = document.querySelector("form");
    let entrada2 = document.createElement("input");
    entrada2.setAttribute("id", "numero2");
    entrada2.setAttribute("type", "text");
    entrada2.setAttribute("placeholder", "Escribe un número")
    formulario.appendChild(entrada2);
}
//crear los input para 1 entrada de datos
function crearInput(numeroDeInputs){
    let formulario = document.querySelector("form");
    if (!inputMostrado) {
        //muestro el formulario
        formulario.style.visibility="visible";
        crearInput1();
        if (numeroDeInputs===2){
            crearInput2();
        }
        crearBoton();
        inputMostrado=true;
    }else{
        document.querySelector("#salida").innerHTML="";
        document.querySelector("#numero1").value="";
        if (numeroDeInputs===1 && document.querySelector("#numero2")){
            document.querySelector("#numero2").remove();
        }
        if(numeroDeInputs===2 && document.querySelector("#numero1")){
            eliminarBoton();
            crearInput2();
            crearBoton();
        }
    }
}

//crear los input para 2 entrada de datos

function valorAbs(){
crearInput(1);
    document.querySelector("#calculo1").addEventListener("click", function (){
        let numero=document.querySelector("#numero1").value;
        document.querySelector("#salida").innerHTML="El valor absoluto de "+numero + " es " + Math.abs(numero);
    })
}
function redondesoSup(){
    crearInput(1);
    document.querySelector("#calculo1").addEventListener("click", function (){
        let numero=document.querySelector("#numero1").value; //lo redondea a su entero superior
        document.querySelector("#salida").innerHTML="El entero superior de "+numero + " es " + Math.ceil(numero);
    })
}
function exponente(){
    crearInput(2);
}
function max(){

}
function min(){

}
function redondeo(){

}
function raizC(){}
function truncar(){}