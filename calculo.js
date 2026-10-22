let nota1;
let nota2;
let nota3;

function pedirNota1(){
     nota1 = Number(prompt("Introduz a tua nota: "));
    
}
function pedirNota2(){
    nota2 = Number(prompt("Introduz a tua nota: "));

}

function pedirNota3(){
     nota3 =Number(prompt("Introduz a tua nota: "));

}


function mostrarMedia(){ 
     let media =(nota1 +nota2 +nota3) / 3;
    alert("Sua media é:"+ media);
}