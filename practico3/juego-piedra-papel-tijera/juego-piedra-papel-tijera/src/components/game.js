import React, { useEffect, useState } from "react";
import piedra from "../images/piedra.jpeg";
import papel from "../images/papel.jpeg";
import tijera from "../images/tijera.jpeg";


const styleGame = {
  boxWelcome: {
    marginButton: "20px",
  },
  boxPlay: {
    marginTop: "20px",
    display: "flex",
    gap: "40px",
    justifyContent: "center",
  },
  gameBoxImg: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    height: "150px",
    width: " 300px",
    cursor: "pointer",
  },
  gameBoxPiedra: {
    backgroundImage: `url(${piedra})`,
  },
  gameBoxPapel: {
    backgroundImage: `url(${papel})`,
  },
  gameBoxTijera: {
    backgroundImage: `url(${tijera})`,
  },
  chooseButton: {
    borderRadius: " 15px",
    backgroundColor: " #A2FADF",
    cursor: " pointer",
    height: " 30px",
    width: " 10%",
  },
  boxCheq: {
    display: " flex",
    justifyContent: " space-evenly",
    marginBottom: " 50px",
    marginTop: " 30px",
  },
  buttonStyle: {
    borderRadius: "15px",
    backgroundColor: "#A2FADF",
    cursor: "pointer",
    height: "30px",
    width: "12%",
    margin: "10px",
    marginLeft: "20px",
  },
};

const Game = ({ user }) => {
  let resultMessage = "";
  const [botomButtonTrigger, setBotomButtonTrigger] = useState(false);
  const [userCount, setUserCount] = useState(0);
  const [userCpuCount, setUserCpuCount] = useState(0);
  const [roundCount, setRoundCount] = useState(0);

  useEffect(() => {
    const miDiv = document.getElementById("result-span");
    miDiv.style.color = "#DFF31B";
    setTimeout(() => {
      miDiv.innerHTML =
        resultMessage +
        "<br><br>" +
        "Rondas jugadas:" +
        roundCount +
        "<br><br><br>" +
        "Puntos Acumulados de " +
        user +
        ": " +
        userCount +
        "<br>" +
        "  Puntos Acumulados de cpu :" +
        userCpuCount;
        if (userCount === 2) {
          alert("estás cerca!");
        }
        if (userCount === 0 && userCpuCount === 2) {
          alert(
            "no superarás el record de la ameba que ha perdido 1-3! ten cuidado!!, a partir de ahora no puedes perder"
          );
        }
        if (userCount === 3) {
          alert(`HAS GANADO ${user} Excelente!`);
         window.location.reload();
        }
        if (userCpuCount === 3) {
          alert(" CPU ha ganado, terrible!");
         window.location.reload();
        }
        if (roundCount === 5) {
          if (userCount > userCpuCount) {
            alert("Las rondas han finalizado");
            alert(
              `Felicidades, Has Ganado!!! tus puntos: ${userCount} los puntos de tu rival: ${userCpuCount}`
            );
          } else if (userCount < userCpuCount) {
            alert("Las rondas han finalizado");
            alert(
              `Lo Lamento, Perdiste.   tus puntos: ${userCount} los puntos de tu rival: ${userCpuCount}`
            );
          } else
            alert(
              `O, ha habido un empate, tus puntos: ${userCount} los puntos de tu rival: ${userCpuCount}`
            );
            window.location.reload();
        }
    }, 5000);
  }, [resultMessage, roundCount, userCount, userCpuCount]);
  const handleReload = () => {
    window.location.reload();
  }

  const handleUserClick = (event) => {
    const userChoice = event.target.value;
    game(userChoice);
  };
  const handleNextRound =()=>{
    let nextRound = document.querySelector(".button-nextRound_box");
    if (botomButtonTrigger === false) {
        nextRound.style.display = "flex";
        setBotomButtonTrigger(true);
      } else if (botomButtonTrigger === true) {
        nextRound.style.display = "none";
        setBotomButtonTrigger(false);
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
    
  }
  const game = (userChoice) => {
    setBotomButtonTrigger(true);
    setRoundCount(roundCount + 1);

    let userImageSelected = document.querySelectorAll(".user-image");
    userImageSelected.forEach(function (div) {
      if (!div.classList.contains(userChoice)) {
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
    const match = (userChoice, oponentResult) => {
     
      if (userChoice === oponentResult) {
        resultMessage = "Empate";
      } else if (userChoice === "piedra" && oponentResult === "papel") {
        resultMessage = `cpu Gana ronda`;
        setUserCpuCount(userCpuCount + 1);
      } else if (userChoice === "papel" && oponentResult === "piedra") {
        resultMessage = `${user} Gana ronda`;
        setUserCount(userCount + 1);
      } else if (userChoice === "piedra" && oponentResult === "tijera") {
        resultMessage = `${user} Gana ronda`;
        setUserCount(userCount + 1);
      } else if (userChoice === "tijera" && oponentResult === "piedra") {
        resultMessage = `Oponente Gana ronda`;
        setUserCpuCount(userCpuCount + 1);
      } else if (userChoice === "papel" && oponentResult === "tijera") {
        resultMessage = `Oponente Gana ronda`;
        setUserCpuCount(userCpuCount + 1);
      } else if (userChoice === "tijera" && oponentResult === "papel") {
        resultMessage = `${user} Gana ronda`;
        setUserCount(userCount + 1);
      }
      
     
    };

    match(userChoice, oponentResult);

    let nextRound = document.querySelector(".button-nextRound_box");
    nextRound.style.display = "flex";
    nextRound.style.justifyContent = "center";
    setBotomButtonTrigger(true);

    
  };

  return (
    <div className="game-container">
      <div className="box-welcome" style={styleGame.boxWelcome}>
        <span>Bienvenido Jugador {user}!</span>
        <br></br>
        <br></br>
        <span>Eige tu jugada</span>
      </div>
      <div className="box-play" style={styleGame.boxPlay}>
        <div
          className="papel user-image"
          style={{ ...styleGame.gameBoxPapel, ...styleGame.gameBoxImg }}
        ></div>
        <div
          className="piedra user-image"
          style={{ ...styleGame.gameBoxPiedra, ...styleGame.gameBoxImg }}
        ></div>
        <div
          className="tijera user-image"
          style={{ ...styleGame.gameBoxTijera, ...styleGame.gameBoxImg }}
        ></div>
      </div>
      <div className="box-cheq" style={styleGame.boxCheq}>
        <button
          value="papel"
          id="papel-cheq"
          className="choose-button"
          type="button"
          name="papel-cheq"
          style={styleGame.chooseButton}
          onClick={handleUserClick}
        >
          Papel
        </button>
        <button
          value="piedra"
          id="piedra-cheq"
          className="choose-button"
          type="button"
          name="piedra-cheq"
          style={styleGame.chooseButton}
          onClick={handleUserClick}
        >
          Piedra
        </button>
        <button
          value="tijera"
          id="tijera-cheq"
          className="choose-button"
          type="button"
          name="tijera-cheq"
          style={styleGame.chooseButton}
          onClick={handleUserClick}
        >
          Tijera
        </button>
      </div>
      <div className="hidden-container">
        <div className="text-box_trigger">
          <h2 className="title-styles">
            Has elegido! tu oponente también tiene su elección:
          </h2>
        </div>
        <div className="box-oponent_selected" style={styleGame.boxCheq}>
          <div className="papel oponent-images" style={{...styleGame.gameBoxImg,...styleGame.gameBoxPapel}}></div>
          <div className="piedra oponent-images" style={{...styleGame.gameBoxImg,...styleGame.gameBoxPiedra}}></div>
          <div className="tijera oponent-images" style={{...styleGame.gameBoxImg,...styleGame.gameBoxTijera}}></div>
        </div>
      </div>
      <div className="results-box">
        <span className="title-styles"> RESULTADO: </span>
        <span className="title-styles" id="result-span">
          {" "}
        </span>
      </div>
      <div className="button-botom">
        <div id="next-round" className="button-nextRound_box" onClick={handleNextRound}>
          <button className="button-style left"style={styleGame.buttonStyle}>Siguiente Ronda</button>
        </div>
        <div id="reload-game" className="button-reload_game" onClick={handleReload}>
          <button className="button-style rigth"style={styleGame.buttonStyle}>Reiniciar juego</button>
        </div>
      </div>
    </div>
  );
};

export default Game;
