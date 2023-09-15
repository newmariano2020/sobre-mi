import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import Game from "./game";

const LoginStyle = {
  labelStyle: {},
  labelStyle2: {
    marginTop: "20px",
    marginBottom: "20px",
    color: "#ffffff",
    fontsize: "20px",
    fontWeight: "500",
    fontfamily: "Arial, Helvetica, sans-serif",
  },
  inputStyle: {
    width: "20%",
    height: "30px",
    borderRadius: "15px",
    paddingLeft: "15px",
  },
  buttonStyle: {
    borderRadius: "15px",
    backgroundColor: "#A2FADF",
    cursor: "pointer",
    height: "30px",
    width: "15%",
    marginLeft: "20px",
  },
};


const Home = () => {
  const [userName, setUserName] = useState("");
  const [userLoggin, setUserLoggin] = useState(false);
  const [userSelect, setUserSelect] = useState(false);



  const handleUserSelect = () =>{
    setUserSelect(true);
  }

  const handleInput = (event) => {
    event.preventDefault();
    const valueInput = document.getElementById("input-name").value;
    setUserName(valueInput);
    setUserLoggin(true);
    
  };

  return (
    <Fragment>
      <div className="container-body">
        {userLoggin ? (
          <Game user={userName}></Game>
        ) : (
          <div class="box-input">
            <label class="title-styles">
              -Ingresa tu nombre para jugar por 5 rondas
            </label>
            <br></br>
            <br></br>

            <label class="title-st2yles" style={LoginStyle.labelStyle2}>
              -Ganará quién obtenga 3 puntos primero
            </label>
            <br></br>
            <br></br>
            <label class="title-styles">
              <em>pero cuidado, un jugador ya participó...</em>
            </label>
            <br></br>
            <br></br>
            <div>
              <form onSubmit={handleInput}>
                <input
                  id="input-name"
                  type="text"
                  class="input-style"
                  style={LoginStyle.inputStyle}
                  placeholder="Ingresa tu nombre"
                />
                <button
                  id="button-user_name"
                  type="submit"
                  class="button-style"
                  style={LoginStyle.buttonStyle}
                >
                  Aceptar
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
