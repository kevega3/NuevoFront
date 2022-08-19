  //modal Video
  $(".demo02").animatedModal({
    animatedIn: 'lightSpeedIn',
    animatedOut: 'bounceOutDown',
    color: '#000000',
    width: '70% ',
    // width: '100% ',
    left: '33%',
    // left: '0%',
});

// $("#circlein").animatedModal({
//     animatedIn: 'bounceIn',
//     animatedOut: 'bounceOut',
//     color: '#ffffff',
//     width: '67% ',
//     left: '33%',
// });


var vid = document.getElementById("myVideo");

function enableAutoplay(id, Video) {
    var ada = MiraYoutube();
    var idVideo = id;
    idVideo.setAttribute('src', Video);
    vid.autoplay = true;
    vid.load();
    return ada;
    
}

function disableAutoplay() {
    var ada = MiraYoutube();
    // var contVi = contenidoViñeta1();
    // var vinieta = AddVinieta();
    vid.autoplay = false;
    vid.load();
    return ada;
}


document.getElementById("myVideo").addEventListener("ended", function () {
    document.getElementById("botonFinal").click();
    // AddVinieta();
    // MiraYoutube();
    contenidoViñeta1();
    
});