const cajas = document.querySelectorAll(".boton-desplegable-informacion");

cajas.forEach(caja =>{
    caja.addEventListener('click', function() {
        const hermana = this.nextElementSibling;
        hermana.style.transition = "opacity 0.5s, height 0.5s";  // 0.5s de duración
        const hijo = this.firstElementChild;
        if(hermana.style.display != "block"){
            hermana.style.display = "block";   // Primero la mostramos
            hermana.style.height = "auto";     
            hijo.style.transform = "rotate(90deg)";     

        }
        else{
            hermana.style.display = "none"; // Luego la oculta
            hermana.style.height = "0";    
            hijo.style.transform = "rotate(0)"; 
        }

    })
})