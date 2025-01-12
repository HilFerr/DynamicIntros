<!-- LANGUAGES -->
<div align = "center">
  <h2>LANGUAGES</h2>
  
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
  <h3>WEB INTRO ANIMATIONS</h3>

  <strong>Dynamic Intros</strong> is a gallery of fluid animations built as intros for when a new web page is loaded.
  
  These are built with

  ![HTML5](https://img.shields.io/badge/html-white.svg?style=for-the-badge&logo=html5&logoColor=0d1117)
  ![CSS3](https://img.shields.io/badge/css-white.svg?style=for-the-badge&logo=css3&logoColor=0d1117)
  ![JavaScript](https://img.shields.io/badge/JavaScript-white?style=for-the-badge&logo=javascript&logoColor=0d1117)
</div>

<br>

<!-- LOGS -->
<div align = "center">
  <!-- VERSIONS -->
  <h1>ANIMATIONS</h1>

<table>
  <h2>1</h2>
  
  <tr>
    <td><div align = "left"><h3>PREVIEW</h3></div></td>
    <td colspan="4" style="text-align: center;"><br><div align = "center"><img src="img/demonstration1.gif"><br><br><i>How the code should run.<I><br><br></div></td>
  </tr>
      
  <tr>
    <td rowspan="2"><strong>VERSION 1.0</strong></td>
    <th style="text-align: center;"><strong>HTML</strong></th>
    <th style="text-align: center;"><strong>CSS</strong></th>
    <th style="text-align: center;"><strong>JAVASCRIPT</strong></th>
  </tr>
  
  <tr>
    <td width = "28.3%">
      <div style="vertical-align: top;">
        - Created the Overlay; <br>
          (used when the page loads) <br><br>
        - Created the Title; <br><br>
        - Created the Navbar.
      </div>
    </td>
    <td width = "28.3%">
      <br>
      <div align = "center"><strong>BODY.CSS</strong></div>
      <hr>
        - Established the default styles for the webpage. <br><br>
      <br><br>
      <br>
      <div align = "center"><strong>NAVBAR.CSS</strong></div>
      <hr>
        - Established the default styles for the navbar. <br><br>
      <br><br>
      <br>
      <div align = "center"><strong>TITLE.CSS</strong></div>
      <hr>
        - Established the default styles for the Title; <br><br>
        - Established the default styles for the Overlay.
      <br><br>
      <br>
    <td width = "28.3%">
      - Slides the text on scrolling; <br><br>
      - Deletes the Overlay on scrolling.
    </td>
  </tr>
</table>
</div>

> [!NOTE]  
> Add this code to show the original animation version, where the title would've already reached the navbar and would still be resizing.
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

<br>
<div align = "center">
  <h1>HOW TO RUN IT</h1>

  Download the files or copy them into your project.
</div>
