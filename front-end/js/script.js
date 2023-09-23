
let botonParaPedir=`
<div class="producto-contador">
<button class="button-contador no-active">-</button>
<input type="text" readonly class="producto-numero" value="0">
<button class="button-contador">+</button>
</div>`
document.querySelector("BotonPedir").innerHTML=botonParaPedir;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

document.addEventListener('DOMContentLoaded', function() {
 // Obtener todos los elementos del contador
 var contadores = document.querySelectorAll('.producto-contador');
 
 // Establecer el límite del contador
 var limite = 10;
 
 // Iterar sobre todos los contadores y agregar los oyentes de eventos
 contadores.forEach(function(contador) {
   // Obtener los botones de incremento y decremento
   var botonMas = contador.querySelector('.button-contador:not(.no-active)');
   var botonMenos = contador.querySelector('.button-contador.no-active');

   // Obtener el input de número
   var inputNumero = contador.querySelector('.producto-numero');

   var valor = 0;

   // Función para incrementar el valor del contador
   botonMas.addEventListener('click', function() {
     if (valor < limite) {
       valor++;
       inputNumero.value = valor;
     }
   });

   // Función para decrementar el valor del contador
   botonMenos.addEventListener('click', function() {
     if (valor > 0) {
       valor--;
       inputNumero.value = valor;
     };
   })   
   
 });
});