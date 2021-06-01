//CRIAÇÃO DE ELEMENTOS:

//Criação section#suspenso:
const susp = window.document.getElementById('suspenso');
const armazem = window.document.createElement('div');
susp.appendChild(armazem);

//Criação das 3 torres:
const tower1 = window.document.getElementById('torre1');
const stacke1 = window.document.createElement('div');
stacke1.classList = "towers";
stacke1.id = "one";
tower1.appendChild(stacke1);

const tower2 = window.document.getElementById('torre2');
const stacke2 = window.document.createElement('div');
stacke2.classList = "towers";
stacke2.id = "two";
tower2.appendChild(stacke2);

const tower3 = window.document.getElementById('torre3');
const stacke3 = window.document.createElement('div');
stacke3.classList = "towers";
stacke3.id = "three";
tower3.appendChild(stacke3);

//Criação dos 4 discos:
const div04 = window.document.getElementById('one');
const disc4 = window.document.createElement('div');
disc4.classList = "discs";
disc4.id = "disc4";
div04.appendChild(disc4);

const div03 = window.document.getElementById('one');
const disc3 = window.document.createElement('div');
disc3.classList = "discs";
disc3.id = "disc3";
div03.appendChild(disc3);

const div02 = window.document.getElementById('one');
const disc2 = window.document.createElement('div');
disc2.classList = "discs";
disc2.id = "disc2";
div02.appendChild(disc2);

const div01 = window.document.getElementById('one');
const disc1 = window.document.createElement('div');
disc1.classList = "discs";
disc1.id = "disc1";
div01.appendChild(disc1);

//Criação section#notas:
const notas = window.document.getElementById('notas');

// const divError1 = window.document.createElement('div');
// divError1.innerText = 'Só um disco de cada vez, ok? Arranje um lugar para o que já pegou antes.';
// divError1.id = 'errorNoMoreThanOne';
// divError1.classList = 'notes';
// notas.appendChild(divError1);

const divError2 = window.document.createElement('div');
divError2.innerText = 'Um disco maior não pode ficar em cima de um menor!';
divError2.id = 'errorLargeSmall';
divError2.classList = 'notes';
notas.appendChild(divError2);

const divError3 = window.document.createElement('div');
divError3.innerText = 'Ok, a torre está completa mas não é aqui que ela deve ficar!';
divError3.id = 'errorCompleteWrongTower';
divError3.classList = 'notes';
notas.appendChild(divError3);


const divSuccess = window.document.createElement('div');
divSuccess.innerText = 'Parabéns! Torre completa!';
divSuccess.id = 'success';
divSuccess.classList = 'notes';
notas.appendChild(divSuccess);




//COMPORTAMENTOS:

//Comportamento torres:
stacke1.addEventListener('click', function(torre1) {
    let currentEventTarget = torre1.currentTarget;
    if (armazem.childElementCount === 0) {
        armazem.appendChild(currentEventTarget.lastElementChild);
    } else {
        currentEventTarget.appendChild(armazem.lastElementChild);
    }

    if (currentEventTarget.lastElementChild.clientWidth < armazem.lastElementChild.clientWidth) {
        divError2.style.dispĺay = "block";
    } else {
        divError2.style.dispĺay = "none";        
    }
//identificar o último filho e adicionar a uma variável

    // .clientWidth
});
stacke2.addEventListener('click', function(torre2) {
    let currentEventTarget = torre2.currentTarget;
    if (armazem.childElementCount === 0) {
        armazem.appendChild(currentEventTarget.lastElementChild);
    } else {
        currentEventTarget.appendChild(armazem.lastElementChild);
    }

    if (currentEventTarget.lastElementChild.clientWidth < armazem.lastElementChild.clientWidth) {
        divError2.style.dispĺay = "block";
    } else {
        divError2.style.dispĺay = "none";        
    }

    if (currentEventTarget.childElementCount === 4) {
        divError3.style.display = "block"
    } else {
        divSuccess.style.display = "none";
    }

    // .clientWidth
});
stacke3.addEventListener('click', function(torre3) {
    let currentEventTarget = torre3.currentTarget;
    if (armazem.childElementCount === 0) {
        armazem.appendChild(currentEventTarget.lastElementChild);
    } else {
        currentEventTarget.appendChild(armazem.lastElementChild);
    }

    if (currentEventTarget.lastElementChild.clientWidth < armazem.lastElementChild.clientWidth) {
        divError2.style.dispĺay = "block";
    } else {
        divError2.style.dispĺay = "none";        
    }

    if (currentEventTarget.childElementCount === 4) {
        divSuccess.style.display = "block";
    } else {
        divSuccess.style.display = "none";
    }
});





