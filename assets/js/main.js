
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
      
       nav.classList.toggle('show-menu')

   
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector(".dropdown__menu").classList.toggle("heighte");
    document.querySelector(".dropbtn").classList.toggle("bot_height");
    document.querySelector(".programm_line").classList.toggle("prog-line");
    document.querySelector(".line_program").classList.toggle("line-bot");
    dropdown__subitem
    dropdown__submenu
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var dropdown__menu = document.querySelector(".dropdown__menu");
      var programm_line = document.querySelector(".programm_line");
      var dropbtn =document.querySelector(".dropbtn");
      var line_program =document.querySelector(".line_program");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          dropdown__menu.classList.remove('heighte');
          dropbtn.classList.remove('bot_height');
          programm_line.classList.remove('prog-line');
          line_program.classList.remove('line-bot');
         
        }
      }
    }
  }