<!-- LANGUAGES -->
<div align = "center">
  <h2>IDIOMAS</h2>
  
  [![EN](https://img.shields.io/badge/EN-white.svg)](https://github.com/HilFerr/DynamicIntros/blob/main/README.md) 
  [![PT](https://img.shields.io/badge/PT-white.svg)](https://github.com/HilFerr/DynamicIntros/blob/main/README-PT.md) 
  [![ES](https://img.shields.io/badge/ES-white.svg)](https://github.com/HilFerr/DynamicIntros/blob/main/README-ES.md)  
</div>

<!-- IMAGE -->
<div align = "center">
  <img src="img/logo.png" width="250px">
</div>

<!-- INTRO -->
<div align = "center">
  <h1>DYNAMIC INTROS</h1>
  <h3>ANIMACIONES DE INTRODUCCIÓN WEB</h3>

<strong>Dynamic Intros</strong> es una galería de animaciones fluidas creadas como introducciones para cuando se carga una nueva página web.  
  Estos están construidos con

  ![HTML5](https://img.shields.io/badge/html-white.svg?style=for-the-badge&logo=html5&logoColor=0d1117)
  ![CSS3](https://img.shields.io/badge/css-white.svg?style=for-the-badge&logo=css3&logoColor=0d1117)
  ![JavaScript](https://img.shields.io/badge/JavaScript-white?style=for-the-badge&logo=javascript&logoColor=0d1117)
</div>

<br>

<!-- LOGS -->
<div align = "center">
  <!-- VERSIONS -->
  <h1>ANIMACIONES</h1>

<table>
  <h2>1 - SLIDE UP</h2>
  
  <tr>
    <td><div align = "left"><h3>PREVIEW</h3></div></td>
    <td colspan="4" style="text-align: center;"><br><div align = "center"><img src="img/demonstration2.gif"><br><br><i>Cómo debería ejecutarse el código.
    <I><br><br></div></td>
  </tr>
      
  <tr>
    <td rowspan="2"><strong>VERSIÓN 1.0</strong></td>
    <th style="text-align: center;"><strong>HTML</strong></th>
    <th style="text-align: center;"><strong>CSS</strong></th>
    <th style="text-align: center;"><strong>JAVASCRIPT</strong></th>
  </tr>
  
  <tr>
    <td width = "28.3%">
      <div style="vertical-align: top;">
        - Creó la <i>Overlay</i>; <br>
          (Se utiliza cuando se carga la página) <br><br>
        - Creó lo <i>Title</i>; <br><br>
        - Creó la <i>Navbar</i>.
      </div>
    </td>
    <td width = "28.3%">
      <br>
      <div align = "center"><strong>BODY.CSS</strong></div>
      <hr>
        - Establecí los estilos predeterminados para la página web. <br><br>
        - Establecí los estilos predeterminados para la <i>Overlay</i>.
      <br><br>
      <br>
      <div align = "center"><strong>NAVBAR.CSS</strong></div>
      <hr>
        - Establecí los estilos predeterminados para la <i>Navbar</i>. <br><br>
      <br><br>
      <br>
      <div align = "center"><strong>TITLE.CSS</strong></div>
      <hr>
        - Establecí los estilos predeterminados para el <i>Title</i>; <br><br>
      <br><br>
      <br>
    <td width = "28.3%">
      - Desliza el texto al desplazarse; <br><br>
      - Elimina la <i>Overlay</i> al desplazarse.
    </td>
  </tr>
</table>
</div>

> [!NOTE]  
> Agregue este código para mostrar la versión original de la animación, donde el <i>Title</i> ya habría llegado a la barra de navegación y aún estaría cambiando de tamaño.
> ### intro.animation.js
> ```
> setTimeout(() => {
>     navbarTitle.innerText = 'TITLE';
>     navbarTitle.style.transform = 'translate(-50%, -50%)';
>     navbarTitle.style.fontSize = '2rem';
>     title.style.display = 'none';
>
>     // Shrinks the navbarTitle by 0.5rem after the animation is done
>     navbarTitle.style.fontSize = '1.5rem';
> }, 1000);
> ```

<div align = "center">

<table>
  <h2>2 - FADE OUT</h2>
  
  <tr>
    <td><div align = "left"><h3>PREVIEW</h3></div></td>
    <td colspan="4" style="text-align: center;"><br><div align = "center"><img src="img/demonstration1.gif"><br><br><i>Cómo debería ejecutarse el código.
    <I><br><br></div></td>
  </tr>
      
  <tr>
    <td rowspan="2"><strong>VERSIÓN 1.0</strong></td>
    <th style="text-align: center;"><strong>HTML</strong></th>
    <th style="text-align: center;"><strong>CSS</strong></th>
    <th style="text-align: center;"><strong>JAVASCRIPT</strong></th>
  </tr>
  
  <tr>
    <td width = "28.3%">
      <div style="vertical-align: top;">
        - Creó la <i>Overlay</i>; <br>
          (Se utiliza cuando se carga la página) <br><br>
        - Creó lo <i>Title</i>; <br><br>
        - Creó la <i>Navbar</i>.
      </div>
    </td>
    <td width = "28.3%">
      <br>
      <div align = "center"><strong>BODY.CSS</strong></div>
      <hr>
        - Establecí los estilos predeterminados para la página web. <br><br>
        - Establecí los estilos predeterminados para la <i>Overlay</i>.
      <br><br>
      <br>
      <div align = "center"><strong>NAVBAR.CSS</strong></div>
      <hr>
        - Establecí los estilos predeterminados para la <i>Navbar</i>. <br><br>
      <br><br>
      <br>
      <div align = "center"><strong>TITLE.CSS</strong></div>
      <hr>
        - Establecí los estilos predeterminados para el <i>Title</i>; <br><br>
      <br><br>
      <br>
    <td width = "28.3%">
      - Hace que el texto desaparezca gradualmente al desplazarse; <br><br>
      - Hace que el texto reaparezca gradualmente al desplazarse; <br><br>
      - Elimina la <i>Overlay</i> al desplazarse.
    </td>
  </tr>
</table>
</div>

<br>
<div align = "center">
  <h1>CÓMO EJECUTARLO</h1>

  Descarga los archivos o cópialos en tu proyecto.
</div>
