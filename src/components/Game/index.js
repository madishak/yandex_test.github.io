import { createElement } from "react";
import { useState, useRef, useEffect } from "react";
import "./styles.css";

const handleDrag = (e) => {
  e.dataTransfer.setData("meat", e.target.id);
};

const imgArrGenerator = () => {
  let imgArr = [];

  for (let i = 0; i <= 119; i++) {
    let img = createElement("img", {
      alt: "meat",
      src: "/meat.png",
      key: i,
      className: "meat",
      id: `drag${i}`,
      draggable: "true",
      onDragStart: handleDrag,
    });
    imgArr.push(img);
  }
  return imgArr;
};

const Game = () => {
  const [countFood, setCountFood] = useState(0);
  const [overText, setOverText] = useState("");
  const [style, setStyle] = useState({ display: "none" });
  const timer = useRef(null);
  const [imgArr, setImgArr] = useState(imgArrGenerator());

  useEffect(() => {
    timer.current = setInterval(() => gameOver(), 10000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const handleAllowDrop = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    let data = e.dataTransfer.getData("meat");
    e.target.appendChild(document.getElementById(data));
    setCountFood(countFood + 1);
  };

  const handleClick = () => {
    setCountFood(0);
    setOverText("");
    setStyle({ display: "none" });
    setImgArr(imgArrGenerator());
  };

  const gameOver = () => {
    setOverText("GAME OVER");
    setStyle({ display: "block" });
  };

  return (
    <div>
      <h1>Игра на JS!</h1>
      <p className="text">
        Давайте немного опробуем на практике возможности JS! Помоги хаски
        собрать как можно больше еды. Нужно из левого бокса, перемещать в
        правый. Игра на время. P.S. Эта версия игры - прототип. В дальнейшем можно доработать.
      </p>
      <img src="./siberian-husky.png" className="game_hero" alt="husky" />
      <p>{countFood}</p>
      <p>{overText}</p>
      <input
        type="button"
        style={style}
        className="restartBtn"
        onClick={() => handleClick()}
        value="Restart"
      />
      <div className="wrapper">
        <div className="inner-left">{imgArr && imgArr.map((el) => el)}</div>
        <div
          className="inner-right"
          id="div1"
          onDrop={handleDrop}
          onDragOver={handleAllowDrop}
        ></div>
      </div>
    </div>
  );
};

export default Game;
