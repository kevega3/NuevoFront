function Desicion(check, horas, texts, p, text) {

  var check1 = check;
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

  }

  // Preguntas 
  // Preguntas 
  else if (text.includes("siscat") || text.includes("siscac") || text.includes("sis Cat") || text.includes("Qué es SISCAC")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "SISCAC es la plataforma dispuesta por la Cuenta de Alto Costo, para que las IPS y EPS puedan registrar y validar en tiempo real la información de los pacientes de alto costo. 🤓 ";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    responsiveVoice.speak('siscat es la plataforma dispuesta por la Cuenta de Alto Costo para que las IPS y EPS puedan', 'Spanish Latin American Female');
    BocaADA(6800);
    EsperaAudio(" registrar y validar en tiempo real la información de los pacientes de alto costo.", 7500, 5000, "btn101");


  } else if (text.includes("abdicar") || text.includes("auditar") || text.includes("Autocad") || text.includes("Qué es AudiCAC") || text.includes("Audi car")) {
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

  else if (text.includes("blockchain") || text.includes("bloch") || text.includes("¿Que es el blockchain?")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes asi aumentando la seguridad de la informacion,dame un momento 😉";

    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    BocaADA(6000);
    responsiveVoice.speak('la implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes. ', 'Spanish Latin American Female');

    EsperaAudio("así aumentando la seguridad de la informacion, dame un momento", 7000, 4100, "btn100");

  } else if (text.includes("¿Como llega la informacion a la  CAC?") || text.includes("información")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Los datos son los modelos colaborativos de las interfaces que se vuelven fundamentales para la toma de  decisiones,Dame un segundo y te doy mas detalles 😀";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");
    BocaADA(6000);
    responsiveVoice.speak('los datos son los modelos colaborativos de las interfaces que se vuelven fundamentales para la toma', 'Spanish Latin American Female');
    EsperaAudio("de decisiones,Dame un segundo y te doy mas detalles", 6800, 3500, "btn110");
  }

  else if (text.includes("¿Que es HIGIA?") || text.includes("higia") || text.includes("lejía") || text.includes("ysy a") || text.includes("exigía") || text.includes("hégira") || text.includes("égida") || text.includes("y gía")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "HIGIA es una Herramienta interactiva de inteligencia de negocios que dispone información epidemiológica de las diferentes enfermedades de alto costo,dame un momento🤓";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");
    BocaADA(6000);
    responsiveVoice.speak('igia es una Herramienta interactiva de inteligencia de negocios que dispone informacion', 'Spanish Latin American Female');
    EsperaAudio("epidemiológica de las diferentes enfermedades de alto costo,dame un momento", 6500, 4800, "btn103");

  } else if (text.includes("¿Que es ARCAC?") || text.includes("arca") || text.includes("arcade") || text.includes("Art Attack") || text.includes("Arkham")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Claro, dame un segundo";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    QuebuenaP(2000, "btn104");
    responsiveVoice.speak('Claro, dame un segundo', 'Spanish Latin American Female');

  } else if (text.includes("modelo predictivo poblacional") || text.includes("modelo predictivo") || text.includes("grc") || text.includes("¿Que es el modelo predictivo poblacional?")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Un segundo";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");


    QuebuenaP(1000, "btn105");
    responsiveVoice.speak('Un segundo', 'Spanish Latin American Female');

  } else if (text.includes("herramientas técnicas") || text.includes("¿Que herramientas tecnicas provee la CAC?")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Que buena pregunta,dame un momento";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");

    QuebuenaP(2500, "btn106");
    responsiveVoice.speak('que buena pregunta,dame un momento', 'Spanish Latin American Female');

  } else if (text.includes("¿Cuales son los consensos que genera la CAC?") || text.includes("conceptos") || text.includes("consejos") || text.includes("consenso") || text.includes("consensos")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Que buena pregunta,dame un momento";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);

    pestañaChat.classList.add("Pestaña");
    QuebuenaP(2500, "btn107");
    responsiveVoice.speak('que buena pregunta,dame un momento', 'Spanish Latin American Female');

  } else if (text.includes("¿Como acceder a los libros de situacion de enfermedades de alto costo?") || text.includes("enfermedades de alto costo") || text.includes(" b y H sida") || text.includes("artritis") || text.includes("b&h y Sida") || text.includes("hemofilia") || text.includes("cáncer") || text.includes("enfermedad renal") || text.includes("hepatitis b")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Que buena pregunta,dame un momento";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);

    pestañaChat.classList.add("Pestaña");

    QuebuenaP(2500, "btn109");
    responsiveVoice.speak('que buena pregunta,dame un momento', 'Spanish Latin American Female');

  } else if (text.includes("libros de investigación") || text.includes("¿Cuales son los libros de investigación que provee la CAC?") || text.includes("libro de investigación")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Que buena Pregunta, Ya te muestro";
    texts.appendChild(p).appendChild(horas);
    p.appendChild(check);
    p.appendChild(pestañaChat);
    pestañaChat.classList.add("Pestaña");
    QuebuenaP(2500, "btn109");
    responsiveVoice.speak('que buena pregunta, Ya te muestro', 'Spanish Latin American Female');
  }




  











// HITOSCAC
else if (text.includes("¿Qué No es la Cuenta de Alto Costo?") || text.includes("qué no es la cuenta alto costo") || text.includes("qué no es la caca")  ) {

  p = document.createElement("p");
  p.classList.add("replay");
  p.innerText = "Nadie me habia hecho esa pregunta";
  texts.appendChild(p).appendChild(horas);
  p.appendChild(check);

  p.appendChild(pestañaChat);
  pestañaChat.classList.add("Pestaña");

  p1 = document.createElement("p");
  p1.classList.add("replay");
  p1.innerText = "Nadie me habia hecho esa pregunta";
  texts.appendChild(p1).appendChild(horas);
  p1.appendChild(check);
  




  


  // BocaADA(6000);
  // responsiveVoice.speak('La implementacion de blockchain en la salud nos permite tener datos limpios y trasparentes.', 'Spanish Latin American Female');

  // EsperaAudio("así aumentando la seguridad de la informacion, dame un momento", 7000, 4100, "btn100");

}


// HITOSCAC















else if (text.includes("caca") || text.includes("cuenta de alto costo") || text.includes("¿Que es la CAC?") || text.includes("la cac") || text.includes("cuenta")) {
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
  
}else if (text.includes("una pregunta") || text.includes("tengo una pregunta")) {
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