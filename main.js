document.addEventListener("DOMContentLoaded", function(){
  
  /* 1er bouton: Driving Simulator */
  document.getElementById("start-driving-simulator").addEventListener('click', function(){
    window.open("https://driving-simulator.beinguzeless.repl.co");
  })

  /* 2nd bouton: Rechargement de la liste */
  document.getElementById("start-reload").addEventListener('click', function(){
    location.reload();
  })

  /* 3eme bouton: Github */
  document.getElementById("start-github-acc").addEventListener('click', function(){
    window.open("https://github.com/KucoDEV");
  })
})
