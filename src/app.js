import "bootstrap";
import "./style.css";



window.onload = function() {
  //write your code here
  let who = ['bombero', 'paco', 'inspector', 'gerente'];
  let action = ['robaron', 'pidieron prestado', 'estafaron', 'regalaron'];
  let what = ['mi trabajo', 'mi celular', 'mi carro'];
  let when = ['Despues de cobrar', 'Cuando sali a comer', 'cuando estaba en el gym', 'en mi almuerzo', 'cuando estaba jugando'];
 


function generateExcuse() {
    let part1 = who[Math.floor(Math.random() * who.length)];
    let part2 = action[Math.floor(Math.random() * action.length)];
    let part3 = what[Math.floor(Math.random() * what.length)];
    let part4 = when[Math.floor(Math.random() * when.length)];

    return `${part1} ${part2} ${part3} ${part4}`;
  }
  
  document.getElementById("excusa").innerHTML = generateExcuse();

  const excusa =document.getElementById("excuse");
  excuseEl.innerHTML = generateExcuse();
};
