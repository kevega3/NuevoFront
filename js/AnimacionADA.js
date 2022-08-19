function cambiaImg(){
    var ADAIMg = document.getElementById("Ada");
    ADAIMg.setAttribute('src', '../img/ADA/ADA_Respira.gif');
    ADAIMg.setAttribute('style', 'width:73%');
    $(".ContenedorBars").addClass("quit");
    $(".BoxMicro").removeClass("quit");
    $("#Ada").addClass("boxBoton");
}

function MiraYoutube(){
    var ADAIMg = document.getElementById("Ada");
    ADAIMg.setAttribute('src', '../img/ADA/ADA_Respira_izq.gif');
    ADAIMg.setAttribute('style', 'width:73%');
    var cancelarMicro = closeVoiceYoutub();
    $(".ContenedorBars").addClass("quit");
    $(".BoxMicro").removeClass("quit");
    $("#Ada").addClass("boxBoton");
    return cancelarMicro;
    
}


var ADAIMg = document.getElementById("Ada");
function PosicionUno(){
    ADAIMg.setAttribute('src', '../img/ADA/ADA_Respira.gif');
    $(".ImgADA").addClass("boxBoton");
    ADAIMg.setAttribute('style', 'width:73%');
}



function BocaADA(time){
    ADAIMg.setAttribute('src', '../img/ADA/ADA_RespiraSinB.gif');
    $(".ContenedorBocca").removeClass("quit");
    setTimeout(()=>{
        $(".ContenedorBocca").addClass("quit");
    }, time);
    setTimeout(()=>{
        ADAIMg.setAttribute('src', '../img/ADA/ADA_Respira.gif');
    }, time);
}


function EsperaAudio(texto,time,masTime) {
    
    setTimeout(() => {
        responsiveVoice.speak(texto, 'Spanish Latin American Female');
        ADAIMg.setAttribute('src', '../img/ADA/ADA_RespiraSinB.gif');
        $(".ContenedorBocca").removeClass("quit");
    }, time);
    setTimeout(() => {
        $(".ContenedorBocca").addClass("quit");
        ADAIMg.setAttribute('src', '../img/ADA/ADA_Respira.gif');
    }, time+masTime);
    setTimeout(() => {
        document.getElementById("btn4").click()
    }, time+masTime+500);
}

function QuitarBtonMi(){
    $(".BoxMicro").addClass("quit");
    $(".ContenedorBars").removeClass("quit");
}

function PonerQuitarBtonMi(){
    $(".BoxMicro").removeClass("quit");
    $(".ContenedorBars").addClass("quit");
}



// scroll 
function scrollPro(){
    $("#divu").animate({ scrollTop: $('#divu').prop("scrollHeight") }, 1000);
}
// scroll 

