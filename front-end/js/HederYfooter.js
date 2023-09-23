//********************* Creando mi Header*************************
let miheader=`	<a class="logo" href="./index.html">
<img src="./img/comoEnCasa.png" alt="fernet logo" />
</a>
<nav>	
<ul class="nav-bar">
<li><a class="nav-link" href="index.html">Inicio</a></li>
<li><a class="nav-link" href="menu.html">Menú</a></li>
<li><a class="nav-link" href="sucuarsales.html">Sucursales</a></li>
<li><a class="nav-link" href="contacto.html">Contacto</a></li>
</ul>
</nav>`
document.querySelector("header").innerHTML=miheader
//****************************************************************

//++++++++++++++++++++++ Creando mi Footer*************************
let miFooter=`
<div class="container">
<div class="row">
  <div class="footer-col">
    <h4>Como en casa</h4>
    <p>
    Somos una apasionada empresa de venta de comida que busca llevar a tu hogar la deliciosa experiencia de disfrutar de platos caseros y auténticos sabores, con la comodidad de recibirlos en tu casa.
    </p>
  </div>
  <div class="footer-col">
    <h4>Como en casa</h4>
    <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="menu.html">Menú</a></li>
    <li><a href="sucuarsales.html">Sucursales</a></li>
    <li><a href="contacto.html">Contacto</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Nuestros platos</h4>
    <ul>
      <li><a href="#">Brochetas</a></li>
      <li><a href="#">Empanadas</a></li>
      <li><a href="#">Patacones</a></li>
      <li><a href="#">Pasticho</a></li>
      <li><a href="#">Otros...</a></li>
    </ul>
  </div>
  <div class="footer-col">
    <h4>Contactanos</h4>
    <div class="social-links">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="https://api.whatsapp.com/send?phone=91127098137"><i class="fab fa-whatsapp"></i></a>
      <a href="https://www.instagram.com/comoencasa_ar/"><i class="fab fa-instagram"></i></a>
      <p>Desarrollado por grupo 18</p>
    </div>
  </div>
</div>
</div>`
document.querySelector("footer").innerHTML=miFooter
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++