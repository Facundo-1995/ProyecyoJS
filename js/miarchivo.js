var articulo = [];

function agregar() {
   var t1 = prompt("Ingrese un texto");//document.getElementById("texto1").value;
   articulo[articulo.length] = t1; 
//   document.getElementById("texto1").value="";
}

function mostrar() {
   for (let index = 0; index < articulo.length; index++) {
      console.log(articulo[index]);

   }
}