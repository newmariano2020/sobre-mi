let userName = "";
let roundCount = 0;
let userCount = 0;
let cpuCount = 0;

let nameU = document.getElementById("button-user_name");
nameU.addEventListener("click", function () {
  let input = document.getElementById("input-name");
  userName = input.value;
  let nameSelected = document.querySelector(".hidden-name");
  nameSelected.innerHTML =
    "BIENVENIDO JUGADOR " + userName + "!" + "<br>" + "Elige tu jugada!";
  let inputHidden = document.querySelector(".box-input");
  inputHidden.style.display = "none";
});

let resultMessage = "";
botomButtonTrigger = false;
const game = (userChoise) => {
  roundCount++;

  let userImageSelected = document.querySelectorAll(".user-image");
  userImageSelected.forEach(function (div) {
    if (!div.classList.contains(userChoise)) {
      div.style.display = "none";
    }
  });

  const eleccionOponente = () => {
    const strings = ["papel", "piedra", "tijera"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
  };
  let choiceHidden = document.querySelector(".box-cheq");
  choiceHidden.style.display = "none";
  let oponentResult = eleccionOponente();
  const resultOponentDisplay = (oponentResult) => {
    const divs = document.querySelectorAll(".oponent-images");
    divs.forEach(function (div) {
      if (!div.classList.contains(oponentResult)) {
        div.style.display = "none";
      }
    });
  };
  setTimeout(resultOponentDisplay, 3000, oponentResult);

  const match = (userChoise, oponentResult) => {
      if (userCount === 2) {
    alert("estás cerca!");
  }
  if (userCount === 0 && cpuCount === 2) {
    alert(
      "no superarás el record de la ameba que ha perdido 1-3! ten cuidado!!, a partir de ahora no puedes perder"
    );
  }
    if (userChoise === oponentResult) {
      resultMessage = "Empate";
    } else if (userChoise === "piedra" && oponentResult === "papel") {
      resultMessage = `cpu Gana ronda`;
      cpuCount++;
    } else if (userChoise === "papel" && oponentResult === "piedra") {
      resultMessage = `${userName} Gana ronda`;
      userCount++;
    } else if (userChoise === "piedra" && oponentResult === "tijera") {
      resultMessage = `${userName} Gana ronda`;
      userCount++;
    } else if (userChoise === "tijera" && oponentResult === "piedra") {
      resultMessage = `Oponente Gana ronda`;
      cpuCount++;
    } else if (userChoise === "papel" && oponentResult === "tijera") {
      resultMessage = `Oponente Gana ronda`;
      cpuCount++;
    } else if (userChoise === "tijera" && oponentResult === "papel") {
      resultMessage = `${userName} Gana ronda`;
      userCount++;
    }
  };

  match(userChoise, oponentResult);

  const miDiv = document.getElementById("result-span");
  miDiv.style.color = "#DFF31B";
  setTimeout(function () {
    miDiv.innerHTML =
      resultMessage +
      "<br><br>" +
      "Rondas jugadas:" +
      roundCount +
      "<br><br><br>" +
      "Puntos Acumulados de " +
      userName +
      ": " +
      userCount +
      "<br>" +
      "  Puntos Acumulados de cpu :" +
      cpuCount;
  }, 5000);

  let nextRound = document.querySelector(".button-nextRound_box");
  nextRound.style.display = "flex";
  nextRound.style.justifyContent = "center";
  botomButtonTrigger = true;

  if (userCount === 3) {
    alert(`HAS GANADO ${userName} Excelente!`);
    location.reload();
  }
  if (cpuCount === 3) {
    alert(" CPU ha ganado, terrible!");
    location.reload();
  }
  if (roundCount === 5) {
    if (userCount > cpuCount) {
      alert("Las rondas han finalizado");
      alert(
        `Felicidades, Has Ganado!!! <br> tus puntos: ${userCount} <br> los puntos de tu rival: ${cpuCount}`
      );
    } else if (userCount < cpuCount) {
      alert("Las rondas han finalizado");
      alert(
        `Lo Lamento,  <br> tus puntos: ${userCount} <br> los puntos de tu rival: ${cpuCount}`
      );
    } else
      alert(`O, ha habido un empate, <br> tus puntos: ${userCount} <br> los puntos de tu rival: ${cpuCount}`);      ;
      location.reload();
  }
};
handleUserElection = (value) => {
  while (userName === "") {
    let response = prompt("ingresa tu nombre para jugar");
    userName = response;
  }
  let nameSelected = document.querySelector(".hidden-name");
  nameSelected.innerHTML = "BIENVENIDO JUGADOR " + userName + "!";
  game(value);
  let inputHidden = document.querySelector(".box-input");
  inputHidden.style.display = "none";
};
const buttonPapel = document.getElementById("papel-cheq");
buttonPapel.addEventListener("click", function () {
  const value = buttonPapel.value;
  console.log(value);
  handleUserElection(value);
});
const buttonPiedra = document.getElementById("piedra-cheq");
buttonPiedra.addEventListener("click", function () {
  const value = buttonPiedra.value;
  handleUserElection(value);
  console.log(value);
});
const buttonTijera = document.getElementById("tijera-cheq");
buttonTijera.addEventListener("click", function () {
  const value = buttonTijera.value;
  handleUserElection(value);
  console.log(value);
});

let nextRound = document.querySelector(".button-nextRound_box");
nextRound.addEventListener("click", function () {
  if (botomButtonTrigger === false) {
    nextRound.style.display = "flex";
    botomButtonTrigger = true;
  } else if (botomButtonTrigger === true) {
    nextRound.style.display = "none";
    botomButtonTrigger = false;
    let choiceVisible = document.querySelector(".box-cheq");
    choiceVisible.style.display = "flex";
    let divs = document.querySelectorAll(".oponent-images");
    divs.forEach(function (div) {
      div.style.display = "flex";
    });
    let userdivs = document.querySelectorAll(".user-image");
    userdivs.forEach(function (div) {
      div.style.display = "flex";
    });

  } else console.log("its been an error");
});
let reload = document.getElementById("reload-game");
reload.addEventListener("click", function () {
  console.log("im clicked");
  location.reload();
});
