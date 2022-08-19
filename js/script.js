var displayHours = document.querySelectorAll(".displayHours");
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
if (minutes < 10) {
  var minutesSi = "0" + minutes;
} else {
  var minutesSi = minutes;
}

displayHours[0].innerHTML = hours + ":" + minutesSi;










function activeVoice() {


  scrollPro();
  QuitarBtonMi();
  PosicionUno();

  const texts = document.querySelector(".texts");

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  let p = document.createElement("p");
  let horas = document.createElement("span");
  let Phoras = document.createElement("span");
  let check = document.createElement("i");
  // fa-solid fa-check iconocheck
  recognition.addEventListener("result", (e) => {

    var currentTimes = new Date();
    var hourss = currentTimes.getHours();
    var minutess = currentTimes.getMinutes();




    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    // inserta texto  
    texts.appendChild(p);
    p.classList.add("Persona");
    p.innerText = text;
    // inserta texto

    if (e.results[0].isFinal) {
      if (minutess < 10) {
        var minutesSii = "0" + minutess;
      } else {
        var minutesSii = minutess;
      }
      // inserta horas persona
      p.appendChild(Phoras);
      Phoras.innerHTML = hourss + ":" + minutesSii;
      Phoras.classList.add("displayHoursPersona");

      // inserta horas persona


      // inserta horas replay
      horas.innerHTML = hourss + ":" + minutesSii;
      horas.classList.add("displayHours");
      check.classList.add("fa-solid");
      check.classList.add("fa-check");
      check.classList.add("iconocheck");
      // inserta horas replay


      if (text.includes("Hola") || text.includes("Buenas tardes") || text.includes("Buenos días")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "hola, como estas 😇";

        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

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

        responsiveVoice.speak('Estoy muy bien gracias,Puedo ayudarte en algo?', 'Spanish Latin American Female');
        BocaADA(2750);
      }
      // else if (text.includes("estoy muy bien")) {
      //   p = document.createElement("p");
      //   p.classList.add("replay");
      //   p.innerText = "Estoy muy bien gracias, ¿ Puedo ayudarte en algo ? 😊";
      //   responsiveVoice.speak('Estoy muy bien gracias,Puedo ayudarte en algo?', 'Spanish Latin American Female');
      //   texts.appendChild(p).appendChild(horas);
      //   p.appendChild(check);
      // }
      else if (text.includes("gracias") || text.includes("Muy bien gracias") || text.includes("Muchas gracias")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "De nada, es un placer 😇";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

        responsiveVoice.speak('De nada, es un placer ', 'Spanish Latin American Female');
        BocaADA(1800);

      } else if (text.includes("Cómo te llamas")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Mi nombre es ADA mucho gusto 🤭 ";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);


        responsiveVoice.speak('Mi nombre es ADA mucho gusto', 'Spanish Latin American Female');
        BocaADA(1800);

      } else if (text.includes("qué siscat") || text.includes("qué siscac") || text.includes("Qué es sis Cat")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "SISCAC es la plataforma dispuesta por la Cuenta de Alto Costo, para que las IPS y EPS puedan registrar y validar en tiempo real la información de los pacientes de alto costo. 😌 ";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

        responsiveVoice.speak('SISCAC es la plataforma dispuesta por la Cuenta de Alto Costo, para que las IPS y EPS puedan registrar y validar en tiempo real la información de los pacientes de alto costo.', 'Spanish Latin American Female');
        BocaADA(1800);


      } else if (text.includes("una pregunta") || text.includes("tengo una pregunta")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Claro dimela 😉";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

        responsiveVoice.speak('Claro dimela', 'Spanish Latin American Female');
        BocaADA(1800);

      }
      else if (text.includes("Qué es abdicar") || text.includes("Qué es auditar") || text.includes("Qué es Autocad")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "audicat  es Aplicativo dispuesto para la auditoria de pacientes reportados por las entidades aqui te muestro un video. 😉";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

        responsiveVoice.speak('audicat es un Aplicativo dispuesto para la auditoria de pacientes reportados por las entidades', 'Spanish Latin American Female');
        
        BocaADA(6000);
        EsperaAudio("Aqui un video",7000,1800);

        

      }
      else if (text.includes("Qué es la mesa de ayuda") || text.includes("mesa de ayuda")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Aplicativo dispuesto para las entidades y los funcionarios de la CAC donde pueden realizar solicitudes para solventar problemas relacionados con la operación de la CAC. 🥰";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);
      }
      else if (text.includes("Qué es la caca") || text.includes("Qué es la Cat") || text.includes("Qué es la cuenta de alto costo")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = " LA CAC (Cuenta de Alto Costo) 🥰 Somos una institución que facilita la gestión de las entidades del sistema de salud, mediante la generación de información objetiva y confiable. Seguridad social en salud de Colombia. trabajamos para mejorar la salud de las personas con enfermedades de alto costo. 😍";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

      } else if (text.includes("Cuántos años cumple la cuenta") || text.includes("Cuántos años cumple la caca") || text.includes("hoy qué se celebra")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "La Cuenta de Alto Costo cumple 15 años el día de hoy, 15 años Transformando la vida de los colombianos.😉 ";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

      } else if (text.includes("valores corporativos")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "👩‍🦰 Nuestro valores corporativos son: la Integridad, La Confiabilidad, integridad, Innovacion  y la excelencia  😀";
        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

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
        p.innerText = "😀 La Cuenta de Alto Costo, es un organismo técnico no gubernamental del Sistema General de Seguridad Social en Salud de Colombia creado mediante el Decreto 2699 de 2007 que obliga a las EPS de ambos regímenes y demás EOC (Entidades Obligadas a Compensar) a asociarse para abordar el Alto Costo y opera como un Fondo auto gestionado que contribuye a estabilizar el sistema de salud, garantizando la operación real de la solidaridad y desestimulando la selección y discriminación de la población mediante un ajuste de riesgo de la prima básica en función de los casos de alto costo. 🧐";

        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

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


      } else if (text.includes("Qué son las aulas virtuales") || text.includes("para qué sirven las aulas virtuales") || text.includes("Cómo nació la caca") || text.includes("Cómo nació la cuenta de alto costo") || text.includes("Cómo se creó la cuenta alto costo")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "😀 La Cuenta de Alto Costo, es un organismo técnico no gubernamental del Sistema General de Seguridad Social en Salud de Colombia creado mediante el Decreto 2699 de 2007 que obliga a las EPS de ambos regímenes y demás EOC (Entidades Obligadas a Compensar) a asociarse para abordar el Alto Costo y opera como un Fondo auto gestionado que contribuye a estabilizar el sistema de salud, garantizando la operación real de la solidaridad y desestimulando la selección y discriminación de la población mediante un ajuste de riesgo de la prima básica en función de los casos de alto costo. 🧐";

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


        BocaADA(2000);
        responsiveVoice.speak('dame un momento, ya te muestro', 'Spanish Latin American Female');

        setTimeout(() => {
          document.getElementById("btn4").click()
        }, 3000);

      }

      else {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Puedes Repetirlo  o decirmelo de otra manera ? 🧏 ";



        BocaADA(2900);
        responsiveVoice.speak('Puedes Repetirlo  o decirmelo de otra manera ?', 'Spanish Latin American Female');

        texts.appendChild(p).appendChild(horas);
        p.appendChild(check);

      }

      scrollPro();

      p = document.createElement("p");

    }
  });

  recognition.addEventListener("end", () => {
    PonerQuitarBtonMi();
  });
  recognition.start();


}


function closeVoice() {
  var ada = cambiaImg();

  return ada;
}

function closeVoiceYoutub() {
  condicion = false;
}
