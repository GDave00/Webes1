let pS = 0;
let cS = 0;
let eS = 0;
let round = 0;
const player_S = document.getElementById("Player_S");
const computer_S = document.getElementById("Computer_S");
const roundIn = document.getElementById("round");
const even = document.getElementById("even");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const choos_P = document.querySelector(".player");
const choos_C = document.querySelector(".computer");
const choos = document.querySelector(":root");
const answer = document.querySelector(".answer");

function computer()
{
  const answers =['R','P','S'];

  const rand = Math.floor(Math.random()* 3);
  return answers[rand];
}

function pW(player,computerC)
{
  pS++;
  masage.innerHTML = "Te nyertél!"// <br> Your choise:"+player+" &nbsp;&nbsp; Computer choise:"+computerC;
  masage.style.color = "green";
  player_S.innerHTML = pS;
}

function cW(player,computerC)
{
  cS++;
  masage.innerHTML = "Számítógép nyert! "//<br> Your choise:"+player+" &nbsp;&nbsp; Computer choise:"+computerC;
  masage.style.color = "red";
  computer_S.innerHTML = cS;
}

function eV(player,computerC)
{
  eS++;
  masage.innerHTML = "Döntetlen! "//<br> Your choise:"+player+" &nbsp;&nbsp; Computer choise:"+computerC;
  masage.style.color = "blue";
  even.innerHTML = "Döntetlenek: "+eS;
}

function game(player)
{
  answer.style.display = "block";
  const computerC = computer();
  switch (player+computerC) {
    case 'RP':
    case 'PS':
    case 'SR':
      cW(player,computerC);
      break;
    case 'RS':
    case 'PR':
    case 'SP':
      pW(player,computerC);
      break;
    case 'RR':
    case 'PP':
    case 'SS':
      eV(player,computerC);
      break;
    default:
      console.log("ERROR switch");
      break;
  }

  switch (player) {
    case 'R':
      choos_P.src = "rock.jpg"
      break;
    case 'P':
      choos_P.src = "paper.jpg"
      break;
    case 'S':
      choos_P.src = "scissors.jpg"
      break;
    default:
    console.log("ERROR choos P");
    break;
  }

  choos.style.setProperty("--bor","solid");
  switch (computerC) {
    case 'R':
      choos_C.src = "rock.jpg"
      break;
    case 'P':
      choos_C.src = "paper.jpg"
      break;
    case 'S':
      choos_C.src = "scissors.jpg"
      break;
    default:
    console.log("ERROR choos C");
    break;
  }

  round++;
  roundIn.innerHTML = "Körök száma: " + round;

}

function main()
{
  rock.addEventListener('click',function()
  {
    game('R');
  })

  paper.addEventListener('click',function()
  {
    game('P');
  })

  scissor.addEventListener('click',function()
  {
    game('S');
  })
}
main();
