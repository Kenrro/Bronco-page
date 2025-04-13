let eslogan = document.getElementById("eslogan");
let texto = document.getElementById("eslogan").textContent;
eslogan.textContent = "";
let count = 0;


function escribir(){
    if(count<texto.length){
        eslogan.textContent += texto.charAt(count);
        count++;
        console.log("si");
        setTimeout(escribir, 80);
    }
}
escribir();