// function bucle(){

//     var num=prompt("ingrese un numero",);

//      for (let index = 0; index < num; index++) {

//         console.log("hola "+index);
            
//      }
    
// }

// function bucle(){
//     var con="";
//     var text=prompt("Ingrese un texto. Para finalizar ingrese ESC");
//     while (text!="ESC"){
//         con=con+text;
//         console.log(con);
//         text=prompt("Ingrese un texto. Para finalizar ingrese ESC");
//     }
// }

// window.onload=bucle();

function calcular() {

   var t1=document.getElementById("texto1").value; 
   var t2=document.getElementById("texto2").value;
   var t3=document.getElementById("texto3").value;
   var t4=document.getElementById("texto4").value;
   var t5=document.getElementById("texto5").value;

   document.getElementById("resultado").innerHTML=(parseInt(t1)+parseInt(t2)+parseInt(t3)+parseInt(t4)+parseInt(t5))*1.21;

}