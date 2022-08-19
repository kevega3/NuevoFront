 <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <link rel="stylesheet" href="../css/ModalAnimacion.css">
    <link rel="stylesheet" href="../css/stilos.css">
    <link rel="stylesheet" href="../css/bton.css">
    <link rel="stylesheet" href="../css/reload.css">
    <link rel="stylesheet" href="../css/animacionAda.css">
    <link rel="stylesheet" href="../css/AnimateVoice.css">
    <link rel="stylesheet" href="../css/Videos.css">
    <link rel="stylesheet" href="../css/spriteAda.css">
    <!-- MODAL MICRO -->
    <link rel="stylesheet" href="../css/botnMin.css">
    <link rel="stylesheet" href="../css/chatBot.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css">
    <!-- MODAL MICRO -->

    <link rel="icon" href="../Img/simbolo_cac_color.png" type="image/gif" sizes="16x16">

    <!--Fuentes-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,700&display=swap"
        rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    
    <!-- Comando de voz -->


    <!-- <script src="../js/annyang.min.js"></script> -->
    <!--Voice ADA  -->
    <script src="https://code.responsivevoice.org/responsivevoice.js?key=Dy5W4C59"></script>

    <title>15 años </title>
</head>

<body style="
font-family: 'Montserrat', sans-serif;
font-weight: bold;">
    </style>



    <div class="contenedorGeneral container-fluid">

    <!-- Header -->

    
    <!-- Header -->




        <!--Contenedor General-->
        <div class="row Stear">
            <!-- VideosYoutube -->
            <div class="col-4  ColumnVideosContenedors1">
                <?php include("Videos.html")?>
            </div>

            <!-- VideosYoutube -->

            
            <!--Ada-->
            <div class="col-4 ColumnaADAContenedor">
                <?php include("Ada.html")?>
                
            </div>
            <!--Ada-->

            <!-- WhatsApp -->
            <div class="col-4    ColumnBtonsContenedors Stear">
                <?php include("ModalMin.html"); ?>
                <!--Final Columna Btones-->
            </div>
            <!-- WhatsApp -->
            

            <!--Final Row-->
        </div>





        <div class="Footer ">
           <?php  include('Footer.html')?>
        </div>


        <!--Fin Contenedor General-->
    </div>




    <?php include('ModalVideo.html') ?>



    <script src="../js/jquery.min.js"></script>
    <script src="../js/animacionModal.js"></script>
    <script src="../js/PlayVideos.js"></script>
    <script src="../js/AnimacionADA.js"></script>


    <!--Fonazome-->
    <script src="https://kit.fontawesome.com/62cb762d5c.js" crossorigin="anonymous"></script>
    <!--  -->
    <script src="../js/bootstrap.bundle.min.js"></script>
    </script>
    <!-- Letras -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script src="../js/Animacion_Letras.js"></script> -->



    <!-- reconocimiento de voz -->
    <script src="../js/script.js"></script>


</body>

</html>