let boton1 = document.getElementById("pre")
let respuesta = document.getElementById("respuesta")

boton1.addEventListener("click",operacion1)

function operacion1(){
    let base = parseFloat(document.getElementById("base").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let oper = base*altura   
    respuesta.innerHTML=`el area del triangulo es: ${oper} cm2`
}



let boton2 = document.getElementById("pre2")
let respuesta2 = document.getElementById("respuesta2")
boton2.addEventListener("click",operacion2)
function operacion2(){
    let base2 = parseFloat(document.getElementById("base2").value)
    let altura2 = parseFloat(document.getElementById("altura2").value)
    let oper2 = base2*altura2
    respuesta2.innerHTML=`EL AREA DE TU PARALELOGRAMO ES: ${oper2} cm2`
}


let boton3 = document.getElementById("pre3")
let respuesta3 = document.getElementById("respuesta3")
boton3.addEventListener("click",operacion3)
function operacion3(){
    let base3 = parseFloat(document.getElementById("base3").value)
    let altura3 = parseFloat(document.getElementById("altura3").value)
    let oper3 = base3*altura3
    respuesta3.innerHTML=`EL AREA DE TU RECTANGULO ES: ${oper3} cm2`
}


let boton4 = document.getElementById("malo1")
let respuesta4 = document.getElementById("malo3")
boton4.addEventListener("click",operacion4)
function operacion4(){
    let base4 = parseFloat(document.getElementById("malo0").value)
    let oper4 = base4*base4
    respuesta4.innerHTML=`EL AREA DE TU CUADRADO ES: ${oper4} cm2`
}


let boton5 = document.getElementById("pre5")
let respuesta5 = document.getElementById("respuesta5")
boton5.addEventListener("click",operacion5)
function operacion5(){
    let dma = parseFloat(document.getElementById("dma").value)
    let dme = parseFloat(document.getElementById("dme").value)
    let oper5 = dma*dme/2
    respuesta5.innerHTML=`EL AREA DE TU ROMBO ES: ${oper5} cm2`
}


let boton6 = document.getElementById("pre6")
let respuesta6 = document.getElementById("respuesta6")
boton6.addEventListener("click",operacion6)
function operacion6(){
    let dma2 = parseFloat(document.getElementById("dma2").value)
    let dme2 = parseFloat(document.getElementById("dme2").value)
    let oper6 = dma2*dme2/2
    respuesta6.innerHTML=`EL AREA DE TU COMETA ES: ${oper6} cm2`
}



let boton7 = document.getElementById("pre7")
let respuesta7 = document.getElementById("respuesta7")
boton7.addEventListener("click",operacion7)
function operacion7(){
    let bs = parseFloat(document.getElementById("bs").value)
    let bi = parseFloat(document.getElementById("bi").value)
    let oper7 = bs*bi/2
    respuesta7.innerHTML=`EL AREA DE TU TRAPECIO ES: ${oper7} cm2`
}


let boton8 = document.getElementById("pre8")
let respuesta8 = document.getElementById("respuesta8")
boton8.addEventListener("click",operacion8)
function operacion8(){
    let radio = parseFloat(document.getElementById("radio").value)
    let oper8 = Math.PI*Math.pow(radio,2)
    respuesta8.innerHTML=`EL AREA DE TU CIRCULO ES: ${oper8}`
}
