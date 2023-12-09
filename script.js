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



var duracionCancion = 255;
var currentTime = 0;
setTimeout(() => {
    currentTime = 225;
},1000);
var porcentajeTiempo = 100 / duracionCancion * currentTime;

tiempoActualDOM = document.querySelector(".s4-time-current");
tiempoTotalDOM = document.querySelector(".s4-time-total");

if(currentTime%60 < 10){
    currentTime = "0" + currentTime;
    tiempoActualDOM.innerText = Math.trunc(currentTime/60) + ":" + currentTime;
}
else{
    tiempoActualDOM.innerText = Math.trunc(currentTime/60) + ":" + currentTime % 60 ;
}
document.documentElement.style.setProperty('--timelineWidth', porcentajeTiempo+'%');

function runContador(){
    runContadorInterval = setInterval(() => {
        porcentajeTiempo = 100 / duracionCancion * currentTime;
        currentTimeMins = Math.trunc(currentTime/60)
        if(currentTime%60 < 10){
            currentTimeSecs = "0" + currentTime%60;   
        }
        else{
            currentTimeSecs = currentTime%60;  
        }
        tiempoActualDOM.innerText = currentTimeMins + ":" + currentTimeSecs;
        
        document.documentElement.style.setProperty('--timelineWidth', porcentajeTiempo+'%');
        currentTime = parseInt(currentTime);
        currentTime++;
        if(currentTime>duracionCancion+1){
            punteroCancion++
            currentTime = 0;
            if(punteroCancion>arrayCanciones.length - 1){
                punteroCancion = 0;
            }
            else if(punteroCancion<0){
                punteroCancion = (arrayCanciones.length - 1);
            }
            arrayCanciones[punteroCancion].select();

            currentTime = 0;
            porcentajeTiempo = 100 / duracionCancion * currentTime;
            currentTimeMins = Math.trunc(currentTime/60)
            if(currentTime%60 < 10){
                currentTimeSecs = "0" + currentTime%60;   
            }
            else{
                currentTimeSecs = currentTime%60;  
            }
            tiempoActualDOM.innerText = currentTimeMins + ":" + currentTimeSecs;
            
            document.documentElement.style.setProperty('--timelineWidth', porcentajeTiempo+'%');
            currentTime = parseInt(currentTime);
            currentTime++;
            if(currentTime>=duracionCancion){
                currentTime = 0;
            }
        }
    }, 1000);
}
runContador();

var arrayCanciones = []

class cancionObj{
    constructor(song, artist, songPic, songDuration, artistPic, listeners, bio){
        this.song = song;
        this.artist = artist;
        this.songPic = songPic;
        this.songDuration = songDuration;

        this.artistPic = artistPic;
        this.listeners = listeners;
        this.bio = bio;
    }

    select(){
        document.querySelector(".s4-song-title").innerText = this.song;
        document.querySelector(".s4-song-artist").innerText = this.artist;
        document.querySelector(".s4-song-img").style.backgroundImage = "url(./multimedia\\ imgs/" + this.songPic + ")";
        document.querySelector(".s4-time-total").innerText = this.songDuration;

        
        let sgIndex = this.songDuration.indexOf(":");
        let sgTimeInSecs = parseInt(this.songDuration.substring(0,sgIndex) * 60) + parseInt(this.songDuration.substring(sgIndex+1,this.songDuration.length));
        duracionCancion = sgTimeInSecs;



        /////////////////////////

        document.querySelector(".s3-multimedia-img").style.backgroundImage = "url(./multimedia\\ imgs/" + this.songPic + ")";
        document.querySelector(".s3-multimedia-info-title").innerText = this.song;
        document.querySelector(".s3-multimedia-info-subtitle").innerText = this.artist;
        document.querySelector(".s3-multimedia-wallpaper").style.backgroundImage = "url(./multimedia\\ imgs/" + this.artistPic + ")";
        document.querySelector(".s3-multimedia-listeners").innerText = this.listeners + " monthly listeners";
        document.querySelector(".s3-multimedia-artist-info").innerText = this.bio;
    }
}

var punteroCancion = Math.trunc(Math.random()*5);


arrayCanciones.push(song = new cancionObj("Sextape","Deftones","sextape.jpg","4:01","deftones.jpg","9,566,161","Formed in Sacramento, CA, in 1988, the multiplatinum GRAMMY® Award-winning Deftones are an influential alternative presence with 10 million records sold worldwide as of 2020."));
arrayCanciones.push(song = new cancionObj("The Beach","The Neighbourhood","wipedout.jpg","4:15","tnbhwallpaper.webp","34,979,057","Since 2011, California quintet The Neighbourhood, with  Rutherford (vocals), Zach Abels (guitar), Jeremy Freedman (guitar), Mikey Margott (bass), and Brandon Fried (drums), have zigged and zagged past conventions and expectations."));
arrayCanciones.push(song = new cancionObj("Doomed","Bring Me The Horizon","tts.jpg","4:34","bmth.webp","13,574,810","ʙʀɪɴɢ ᴍᴇ ᴛʜᴇ ʜᴏʀɪᴢᴏɴ https://www.bmthofficial.com"));
arrayCanciones.push(song = new cancionObj("Style","Taylor Swift","1989ts.jpg","3:51","midnightsts.jpg","107,751,274","Taylor Swift is that rarest of pop phenomena: a superstar who managed to completely cross over from country to the mainstream, becoming an enduring pop culture icon and conquering the world in the process."));
arrayCanciones.push(song = new cancionObj("Fake Plastic Trees","Radiohead","thebends.jpg","4:50","radiohead2.webp","24,814,910","At some point in the early 21st century, Radiohead became something more than a band: they became a touchstone for everything that is fearless and adventurous in rock."));

arrayCanciones[punteroCancion].select();

//console.log(arrayCanciones.length);

document.querySelector(".s4-lastsong-control").addEventListener("click",()=>{
    punteroCancion--
    if(punteroCancion>arrayCanciones.length - 1){
        punteroCancion = 0;
    }
    else if(punteroCancion<0){
        punteroCancion = (arrayCanciones.length - 1);
    }
    arrayCanciones[punteroCancion].select();

    currentTime = 0;
    porcentajeTiempo = 100 / duracionCancion * currentTime;
    currentTimeMins = Math.trunc(currentTime/60)
    if(currentTime%60 < 10){
        currentTimeSecs = "0" + currentTime%60;   
    }
    else{
        currentTimeSecs = currentTime%60;  
    }
    tiempoActualDOM.innerText = currentTimeMins + ":" + currentTimeSecs;
    
    document.documentElement.style.setProperty('--timelineWidth', porcentajeTiempo+'%');
    currentTime = parseInt(currentTime);
    currentTime++;
    if(currentTime>=duracionCancion){
        currentTime = 0;
    }
});

document.querySelector(".s4-nextsong-control").addEventListener("click",()=>{
    punteroCancion++
    currentTime = 0;
    if(punteroCancion>arrayCanciones.length - 1){
        punteroCancion = 0;
    }
    else if(punteroCancion<0){
        punteroCancion = (arrayCanciones.length - 1);
    }
    arrayCanciones[punteroCancion].select();

    currentTime = 0;
    porcentajeTiempo = 100 / duracionCancion * currentTime;
    currentTimeMins = Math.trunc(currentTime/60)
    if(currentTime%60 < 10){
        currentTimeSecs = "0" + currentTime%60;   
    }
    else{
        currentTimeSecs = currentTime%60;  
    }
    tiempoActualDOM.innerText = currentTimeMins + ":" + currentTimeSecs;
    
    document.documentElement.style.setProperty('--timelineWidth', porcentajeTiempo+'%');
    currentTime = parseInt(currentTime);
    currentTime++;
    if(currentTime>=duracionCancion){
        currentTime = 0;
    }
});

///////////////////////////////////////// pausar y reproducir

document.querySelector(".s4-control2").addEventListener("click",pauseSong);

function pauseSong(){
    clearInterval(runContadorInterval);
    document.querySelector(".s4-playbutton-container").style.scale = 0.9;
    setTimeout(() => {
        document.querySelector(".s4-playbutton-container").style.scale = 1;
    },150);
    document.querySelector(".s4-control2").classList.add("bx-play","bx","s4-playbuttonjs");
    document.querySelector(".s4-playbutton-container").classList.add("s4-playbutton-container-js");
    document.querySelector(".s4-control2").removeEventListener("click",pauseSong);
    document.querySelector(".s4-control2").addEventListener("click",resumeSong);
}

function resumeSong(){
    runContador();
    document.querySelector(".s4-playbutton-container").style.scale = 0.9;
    setTimeout(() => {
        document.querySelector(".s4-playbutton-container").style.scale = 1;
    },150);
    document.querySelector(".s4-control2").classList.remove("bx-play","bx","s4-playbuttonjs");
    document.querySelector(".s4-playbutton-container").classList.remove("s4-playbutton-container-js");
    document.querySelector(".s4-control2").removeEventListener("click",resumeSong);
    document.querySelector(".s4-control2").addEventListener("click",pauseSong);
}