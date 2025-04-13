const cajas = document.querySelectorAll(".boton-desplegable-informacion");

cajas.forEach(caja =>{
    caja.addEventListener('click', function() {
        const hermana = this.nextElementSibling;
        const hijo = this.firstElementChild;
        if(hermana.classList.contains("plegado")){
            hermana.classList.add("desplegado");
            hermana.classList.remove("plegado");
            hijo.style.transform = "rotate(90deg)";     

        }
        else{
            hermana.classList.add("plegado");
            hermana.classList.remove("desplegado");   
            hijo.style.transform = "rotate(0)"; 
        }

    })
})
/*

*/