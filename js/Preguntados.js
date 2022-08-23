function Desicion(check, horas, texts, p, text) {
  let pestañaChat = document.createElement("span");

  scrollPro();
  if (text.includes("Hola") || text.includes("Buenas tardes") || text.includes("Buenos días")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "hola, como estas 😇";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('Hola,como estas', 'Spanish Latin American Female');
    BocaADA(1800);
  }
  else if (
    text.includes("y tú") || text.includes("Cómo estás") || text.includes("estoy bien")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "estoy muy bien gracias, ¿ Puedo ayudarte en algo ? 😊";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('Estoy muy bien gracias,Puedo ayudarte en algo?', 'Spanish Latin American Female');
    BocaADA(2750);
  }

  else if (text.includes("gracias") || text.includes("Muy bien gracias") || text.includes("Muchas gracias") || text.includes("Gracias")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "De nada, es un placer 😇";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('De nada, es un placer ', 'Spanish Latin American Female');
    BocaADA(1800);

  } else if (text.includes("Cómo te llamas")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Mi nombre es ADA mucho gusto 🤭 ";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    responsiveVoice.speak('Mi nombre es ADA mucho gusto', 'Spanish Latin American Female');
    BocaADA(1800);

  } else if (text.includes("qué siscat") || text.includes("qué siscac") || text.includes("Qué es sis Cat") || text.includes("Qué es SISCAC")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "SISCAC es la plataforma dispuesta por la Cuenta de Alto Costo, para que las IPS y EPS puedan registrar y validar en tiempo real la información de los pacientes de alto costo. 😌 ";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    responsiveVoice.speak('siscat es la plataforma dispuesta por la Cuenta de Alto Costo para que las IPS y EPS puedan', 'Spanish Latin American Female');
    BocaADA(6800);
    EsperaAudio(" registrar y validar en tiempo real la información de los pacientes de alto costo.", 7500, 5000, "btn101");


  } else if (text.includes("una pregunta") || text.includes("tengo una pregunta")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Claro dimela 😉";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('Claro dimela', 'Spanish Latin American Female');
    BocaADA(1800);

  }
  else if (text.includes("abdicar") || text.includes("auditar") || text.includes("Autocad") || text.includes("Qué es AudiCAC")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "AudiCAC es Aplicativo dispuesto para la auditoria de pacientes reportados por las entidades, aqui te muestro un video. 😉";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('audicat es un Aplicativo dispuesto para la auditoria de pacientes reportados por las entidades', 'Spanish Latin American Female');

    BocaADA(6000);
    EsperaAudio("Aqui un video", 7000, 1800, "btn100");



  }
  else if (text.includes("Qué es la mesa de ayuda") || text.includes("mesa de ayuda")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Aplicativo dispuesto para las entidades y los funcionarios de la CAC donde pueden realizar solicitudes para solventar problemas relacionados con la operación de la CAC. 🥰";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('Aplicativo dispuesto para las entidades y los funcionarios de la CAC donde pueden realizar', 'Spanish Latin American Female');
    BocaADA(5700);

    EsperaAudio("solicitudes para solventar problemas relacionados con la operación de la CAC, Aqui un video", 6500, 5800, "btn100");



  }
  else if (text.includes("Qué es la caca") || text.includes("Qué es la Cat") || text.includes("Qué es la cuenta de alto costo") || text.includes("Que es la CAC ?")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = " LA CAC (Cuenta de Alto Costo) 🥰 Somos una institución que facilita la gestión de las entidades del sistema de salud mediante la generación de información objetiva y confiable.Ya te doy mas detalles 😍";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    responsiveVoice.speak('Somos una institución que facilita la gestión de las entidades del sistema de salud, ', 'Spanish Latin American Female');
    BocaADA(5300);
    EsperaAudio("mediante la generación de información objetiva y confiable, ya te doy mas detalles", 5900, 5600, "btn102");



  } else if (text.includes("valores corporativos")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "👩‍🦰 Nuestro valores corporativos son: la Integridad, La Confiabilidad, integridad, Innovacion  y la excelencia  😀";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

  } else if (text.includes("coordinaciones") || text.includes("coordinaciones de la cuenta") || text.includes("coordinaciones la cuenta")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "La CAC cuenta con 7 coordinaciones entre ellas se encuentran: ";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "Coordinación Administrativa 👏";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "🧐 Coordinación de auditoria ";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "Coordinación I+I+D 🤓";
    texts.appendChild(p);


    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "🧐 Coordinación gestión del conocimiento ";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "Coordinación gestión del riesgo 🤭";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replay");
    p.classList.add("box");
    p.innerText = " 😍 Coordinación de tecnología Y la Coordinación de calidad. ";
    texts.appendChild(p);
  }
  else if (text.includes("Qué enfermedades maneja la cuenta") || text.includes("Qué enfermedades")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "La CAC maneja entre sus enfermedades :";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "Artritis Reumatoide";
    texts.appendChild(p);


    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "Hemofilia";
    texts.appendChild(p);


    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "Enfermedad renal crónica";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replayMuchos");
    p.classList.add("box");
    p.innerText = "VIH";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replay");
    p.classList.add("box");
    p.innerText = "Cáncer Y Hepatitis C";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);

  }
  else if (text.includes("Cómo se construyó la caca") || text.includes("Cómo se fundó la caca") || text.includes("Cómo nació la caca") || text.includes("Cómo nació la cuenta de alto costo") || text.includes("Cómo se creó la cuenta alto costo")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "😀 La Cuenta de Alto Costo es un organismo técnico no gubernamental del Sistema General de  Salud de Colombia creado mediante el Decreto 2699 de 2007 Con el fin de mejorar el sistema de salud🧐";


    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    responsiveVoice.speak(' La Cuenta de Alto Costo es un organismo técnico no gubernamental del Sistema General de  Salud de Colombia creado mediante el Decreto 2699 de 2007 Con el fin de mejorar el sistema de salud.', 'Spanish Latin American Female');
    BocaADA(5300);
    // EsperaAudio("mediante la generación de información objetiva y confiable, ya te doy mas detalles", 5900, 5600,"btn100");


  } else if (text.includes("Qué aplicativos tiene ") || text.includes("qué aplicativos tiene")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "😀 La CAC cuenta con aplicativos de uso interno como externo el nombre de ellos son:";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replay");
    p.classList.add("box");
    p.innerText = "SISCAC ";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replay");
    p.classList.add("box");
    p.innerText = "Mesa de ayuda ";
    texts.appendChild(p);


    p = document.createElement("p");
    p.classList.add("replay");
    p.classList.add("box");
    p.innerText = "AudiCAC";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replay");
    p.classList.add("box");
    p.innerText = "Aulas Virtuales y nuestro Sitio Web ";
    texts.appendChild(p);

    p = document.createElement("p");
    p.classList.add("replay");
    p.classList.add("box");
    p.innerText = "🙋‍♀️ ¿Quieres saber para que se crearon ?  Solo preguntame  🤭";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);


  }


  // Videos
  else if (text.includes("b&h y Sida") || text.includes("b y H sida") || text.includes("b y H sida") || text.includes("Cómo acceder a los libros de situación de b&h Sida en la población afiliada ")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Claro que si, ya te muestro ";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(2000);
    responsiveVoice.speak('Claro que si, ya te muestro', 'Spanish Latin American Female');

    setTimeout(() => {
      document.getElementById("btn1").click()
    }, 3000);

  } else if (text.includes("libros cáncer") || text.includes("cáncer") || text.includes("Cómo acceder a los libros de la situación del cáncer en la población afiliada")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Claro que si, ya te muestro 🤩";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(2000);
    responsiveVoice.speak('Claro que si, ya te muestro', 'Spanish Latin American Female');

    setTimeout(() => {
      document.getElementById("btn2").click()
    }, 3000);

  } else if (text.includes("arca") || text.includes("arcade") || text.includes("arcat") || text.includes("arcac")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Dame un momento, ya te muestro 🤓";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(2000);
    responsiveVoice.speak('Dame un momento, ya te muestro', 'Spanish Latin American Female');

    setTimeout(() => {
      document.getElementById("btn3").click()
    }, 3000);

  } else if (text.includes("enfermedad renal crónica") || text.includes("grc") || text.includes("erc") || text.includes("la enfermedad renal crónica")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Dame un momento, ya te muestro 🤓";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(2000);
    responsiveVoice.speak('dame un momento, ya te muestro', 'Spanish Latin American Female');

    setTimeout(() => {
      document.getElementById("btn4").click()
    }, 3000);

  } else if (text.includes("blockchain")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes asi aumentando la seguridad de la informacion,dame un momento🤓";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(6000);
    responsiveVoice.speak('La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes.', 'Spanish Latin American Female');

    EsperaAudio("así aumentando la seguridad de la informacion, dame un momento", 7000, 4100, "btn100");

  }










// HITOSCAC
else if (text.includes("¿Qué No es la Cuenta de Alto Costo?")) {
  p = document.createElement("p");
  p.classList.add("replay");
  p.innerText = "La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes asi aumentando la seguridad de la informacion,dame un momento🤓";

  texts.appendChild(p).appendChild(horas);
  p.appendChild(check);
  p.appendChild(pestañaChat);
  pestañaChat.classList.add("Pestaña");


  // BocaADA(6000);
  // responsiveVoice.speak('La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes.', 'Spanish Latin American Female');

  // EsperaAudio("así aumentando la seguridad de la informacion, dame un momento", 7000, 4100, "btn100");

}


// HITOSCAC
















  else {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Puedes decirmelo de otra forma 😊?";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(2000);
    responsiveVoice.speak('Puedes decirmelo de otra forma', 'Spanish Latin American Female');

  }
  scrollPro();

}