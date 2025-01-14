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
  <h3>ANIMAÇÕES PARA PÁGINAS WEB</h3>

<strong>Dynamic Intros</strong> é uma galeria de animações fluidas criadas como introduções para quando uma nova página da web é carregada.
  Estas foram construídas com o uso de

  ![HTML5](https://img.shields.io/badge/html-white.svg?style=for-the-badge&logo=html5&logoColor=0d1117)
  ![CSS3](https://img.shields.io/badge/css-white.svg?style=for-the-badge&logo=css3&logoColor=0d1117)
  ![JavaScript](https://img.shields.io/badge/JavaScript-white?style=for-the-badge&logo=javascript&logoColor=0d1117)
</div>

<br>

<!-- LOGS -->
<div align = "center">
  <!-- VERSIONS -->
  <h1>ANIMAÇÕES</h1>

<table>
  <h2>1 - SLIDE UP</h2>
  
  <tr>
    <td><div align = "left"><h3>PREVIEW</h3></div></td>
    <td colspan="4" style="text-align: center;"><br><div align = "center"><img src="img/demonstration1.gif"><br><br><i>Como o código deve correr.<I><br><br></div></td>
  </tr>
      
  <tr>
    <td rowspan="2"><strong>VERSÃO 1.0</strong></td>
    <th style="text-align: center;"><strong>HTML</strong></th>
    <th style="text-align: center;"><strong>CSS</strong></th>
    <th style="text-align: center;"><strong>JAVASCRIPT</strong></th>
  </tr>
  
  <tr>
    <td width = "28.3%">
      <div style="vertical-align: top;">
        - Criou-se o <i>Overlay</i>; <br>
          (Usado quando a página carrega) <br><br>
        - Criou-se o <i>Title</i>; <br><br>
        - Criou-se a <i>Navbar</i>.
      </div>
    </td>
    <td width = "28.3%">
      <br>
      <div align = "center"><strong>BODY.CSS</strong></div>
      <hr>
        - Estabeleceu-se os estilos padrão para a página web. <br><br>
        - Estabeleceu-se os estilos padrão para a <i>Overlay</i>.
      <br><br>
      <br>
      <div align = "center"><strong>NAVBAR.CSS</strong></div>
      <hr>
        - Estabeleceu-se os estilos padrão para a <i>Navbar</i>. <br><br>
      <br><br>
      <br>
      <div align = "center"><strong>TITLE.CSS</strong></div>
      <hr>
        - Estabeleceu-se os estilos padrão para a <i>Title</i>; <br><br>
      <br><br>
      <br>
    <td width = "28.3%">
      - Desliza o texto ao dar scroll; <br><br>
      - Elimina o <i>Overlay</i> ao dar scroll.
    </td>
  </tr>
</table>
</div>

> [!NOTE]  
> Adicione este código para exibir a versão original do código, versão onde o <i>Title</i> já se encontra na Navbar mas continua a ajustar.
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
    <td colspan="4" style="text-align: center;"><br><div align = "center"><img src="img/demonstration2.gif"><br><br><i>Como o código deve correr.<I><br><br></div></td>
  </tr>
      
  <tr>
    <td rowspan="2"><strong>VERSÃO 1.0</strong></td>
    <th style="text-align: center;"><strong>HTML</strong></th>
    <th style="text-align: center;"><strong>CSS</strong></th>
    <th style="text-align: center;"><strong>JAVASCRIPT</strong></th>
  </tr>
  
  <tr>
    <td width = "28.3%">
      <div style="vertical-align: top;">
        - Criou-se o <i>Overlay</i>; <br>
          (Usado quando a página carrega) <br><br>
        - Criou-se o <i>Title</i>; <br><br>
        - Criou-se a <i>Navbar</i>.
      </div>
    </td>
    <td width = "28.3%">
      <br>
      <div align = "center"><strong>BODY.CSS</strong></div>
      <hr>
        - Estabeleceu-se os estilos padrão para a página web. <br><br>
        - Estabeleceu-se os estilos padrão para a <i>Overlay</i>.
      <br><br>
      <br>
      <div align = "center"><strong>NAVBAR.CSS</strong></div>
      <hr>
        - Estabeleceu-se os estilos padrão para a <i>Navbar</i>. <br><br>
      <br><br>
      <br>
      <div align = "center"><strong>TITLE.CSS</strong></div>
      <hr>
        - Estabeleceu-se os estilos padrão para a <i>Title</i>; <br><br>
      <br><br>
      <br>
    <td width = "28.3%">
      - Faz o texto desaparecer gradualmente ao dar scroll; <br><br>
      - Faz o texto reaparecer gradualmente ao dar scroll; <br><br>
      - Elimina o <i>Overlay</i> ao dar scroll.
    </td>
  </tr>
</table>
</div>

<br>
<div align = "center">
  <h1>COMO EXECUTAR O CÓDIGO</h1>

  Descarregue os ficheiros e coloque-os no seu ficheiro.
</div>
