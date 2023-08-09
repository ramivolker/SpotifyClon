//document.addEventListener('contextmenu', event => event.preventDefault());

mitems = document.getElementsByClassName("multimedia-grid-item")
mitems = Array.from(mitems);
var fondoSelector = false;
var dontRepeat = false;
mitems.forEach(mitem => {
    mitem.addEventListener("mouseover",()=>{
        document.documentElement.style.setProperty("--opacity3","0");
        texto = mitem.children[1].textContent;
        
        switch(texto){
            case "Liked Songs":
                changeGradient("#1e0f46");
            break
            case "The Neighbourhood":
                changeGradient("#333");
            break
            case "Pierce The Veil":
                changeGradient("#cfab7c");
            break
            case "Cigarettes After Sex":
                changeGradient("#363636");
            break
            case "Falling In Reverse":
                changeGradient("#962020");
            break
            case "Who Really Cares":
                changeGradient("#ed2789")
            break
        }
    })
    mitem.addEventListener("mouseout",()=>{
    document.documentElement.style.setProperty("--opacity3","1");
    })
});

function changeGradient(color){
    if(dontRepeat == color){return}
    if(fondoSelector == false){
    document.documentElement.style.setProperty("--bgcolor2",`linear-gradient(${color},#111 350px)`);
    document.documentElement.style.setProperty("--opacity2","1");
    setTimeout(() => {
        fondoSelector = true;
      }, 250);
    
}
    else if(fondoSelector == true){
    document.documentElement.style.setProperty("--bgcolor1",`linear-gradient(${color},#111 350px)`);
    document.documentElement.style.setProperty("--opacity2","0");
    setTimeout(() => {
        fondoSelector = false;
      }, 250);
    }
    dontRepeat = color;
}

console.log("hola");




