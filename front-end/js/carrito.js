document.addEventListener("DOMContentLoaded", function() {
  var botonesAgregarPedido = document.getElementsByClassName("agregar-al-pedido");
  for (var i = 0; i < botonesAgregarPedido.length; i++) {
    botonesAgregarPedido[i].addEventListener("click", function() {
      var nombre = this.getAttribute("data-nombre");
      var precio = this.getAttribute("data-precio");
      var cantidad = obtenerCantidadPlatos(this);

      if (cantidad === 0) {
        alert("Agregue una cantidad");
      } else {
        var itemPedido = {
          nombre: nombre,
          precio: precio,
          cantidad: cantidad
        };

        agregarAlCarrito(itemPedido);
        alert("Plato agregado al pedido");
      }
    });
  }

    //para el pedido
  document.getElementById("pedir").addEventListener("click", function() {
    alert("Pedido enviado");
    document.getElementById("cancelar").click();
  });

    document.getElementById("cancelar").addEventListener("click", function() {
      var listaCarrito = document.getElementById("lista-carrito");
      while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
      }
  
      var total = calcularTotal();
      document.getElementById("total-carrito").textContent = "Total: $" + total;
    });
  
    
    function agregarAlCarrito(itemPedido) {
          var nombre = itemPedido.nombre;
          var precio = itemPedido.precio;
          var cantidad = itemPedido.cantidad;
      
          var listaCarrito = document.getElementById("lista-carrito");
      
          var listItem = document.createElement("li");
          listItem.textContent = nombre + " - $" + precio + " x " + cantidad;
          listaCarrito.appendChild(listItem);
      
          var total = calcularTotal();
          document.getElementById("total-carrito").textContent = "Total: $" + total;


    }
  
    function calcularTotal() {
      var total = 0;
      var listaItems = document.querySelectorAll("#lista-carrito li");
      for (var i = 0; i < listaItems.length; i++) {
        var precioTexto = listaItems[i].textContent.split(" - $")[1];
        var precio = parseInt(precioTexto.split(" x ")[0]);
        var cantidad = parseInt(precioTexto.split(" x ")[1]);
        total += precio * cantidad;
      }
      return total;
    }
  
    function obtenerCantidadPlatos(botonAgregar) {
      var contenedorProducto = botonAgregar.parentNode;
      var inputCantidad = contenedorProducto.getElementsByClassName("producto-numero")[0];
      var cantidad = parseInt(inputCantidad.value);
      return cantidad;
    }
  
    var botonesContador = document.getElementsByClassName("button-contador");
    for (var i = 0; i < botonesContador.length; i++) {
      botonesContador[i].addEventListener("click", function() {
        var contenedorProducto = this.parentNode;
        var inputCantidad = contenedorProducto.getElementsByClassName("producto-numero")[0];
        var cantidad = parseInt(inputCantidad.value);
        var esIncremento = this.textContent === "+";
  
        if (esIncremento) {
          cantidad++;
        } else {
          if (cantidad > 0) {
            cantidad--;
          }
        }
  
        inputCantidad.value = cantidad;
      });
    }
  });
  