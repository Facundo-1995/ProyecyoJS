function bucle(){

    var num=prompt("ingrese un numero",);

     for (let index = 0; index < num; index++) {

        console.log("hola "+index);
            
     }
    
}

// function bucle(){
//     var con="";
//     var text=prompt("Ingrese un texto. Para finalizar ingrese ESC");
//     while (text!="ESC"){
//         con=con+text;
//         console.log(con);
//         text=prompt("Ingrese un texto. Para finalizar ingrese ESC");
//     }
// }

window.onload=bucle();