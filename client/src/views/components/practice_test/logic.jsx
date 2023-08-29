// import { words_english } from "../../../../public/words/english.js";
import axios from "axios";

//Global variables
var words_english = []
var wordListLength = 0;

const wordList = () => {
  var wrds = [];
  axios.defaults.withCredentials = true;
  axios.get('http://localhost:5101/test/profile').
  then( res => {
    wrds = res.practiceKeys;
  })
};

const mapLetter = (lttr) => {
  return <span className="letter">{lttr}</span>;
};

export const mapWords = () => {
  const wrdlist = wordList();
  let res = [];
  for (let i = 0; i < 200; i++) {
    res[i] = (
      <div className="word">
        {wrdlist[i].split("").map((lttr) => mapLetter(lttr))}
      </div>
    );
    // document.getElementById("words").appendChild(res[i]);
  }
  return res;
};

export const reMapWord = () => {
  const wrdlist = wordList();
  for (let i = 0; i < 200; i++) {
    const el = document.createElement('div');
    el.className = "word";
    wrdlist[i].split('').map(lttr => {
      const lttrEl = document.createElement('span');
      lttrEl.className = 'letter';
      lttrEl.innerHTML = lttr;
      el.appendChild(lttrEl);
    })
    document.getElementById("words").appendChild(el); 
  }

  return null;
};

const addClass = (el, name) => {
  el.className = el.className + " " + name;
};

export const newGame = () => {
  addClass(document.querySelector(".word"), "active");
};
