//Criação das 3 torres:
const tower1 = window.document.getElementById('torre1');
const div1 = window.document.createElement('div');
div1.classList = "towers";
div1.id = "one";
tower1.appendChild(div1);

const tower2 = window.document.getElementById('torre2');
const div2 = window.document.createElement('div');
div2.classList = "towers";
div2.id = "two";
tower2.appendChild(div2);

const tower3 = window.document.getElementById('torre3');
const div3 = window.document.createElement('div');
div3.classList = "towers";
div3.id = "three";
tower3.appendChild(div3);

//Criação dos 4 discos:
const disc4 = window.document.getElementById('torre1');
const div04 = window.document.createElement('div');
div04.classList = "discs";
div04.id = "disc4";
disc4.appendChild(div04);

const disc3 = window.document.getElementById('torre1');
const div03 = window.document.createElement('div');
div03.classList = "discs";
div03.id = "disc3";
disc3.appendChild(div03);

const disc2 = window.document.getElementById('torre1');
const div02 = window.document.createElement('div');
div02.classList = "discs";
div02.id = "disc2";
disc2.appendChild(div02);

const disc1 = window.document.getElementById('one');
const div01 = window.document.createElement('div');
div01.classList = "discs";
div01.id = "disc1";
disc1.appendChild(div01);

//Comportamento torres:

//Comportamento discos:

//Comportamento section#suspenso:
const susp = window.document.getElementById('suspenso');

//Comportamento section#notas:
const notas = window.document.getElementById('notas');

const divError = window.document.createElement('div');
divError.innerText = 'Um disco maior não pode ficar em cima de um menor!';
divError.id = 'errorLargeSmall';
divError.classList = 'notes';
notas.appendChild(divError);

const divSuccess = window.document.createElement('div');
divSuccess.innerText = 'Parabéns! Torre completa!';
divSuccess.id = 'success';
divSuccess.classList = 'notes';
notas.appendChild(divSuccess);

