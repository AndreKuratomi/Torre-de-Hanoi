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

const divError1 = window.document.createElement('div');
divError1.innerText = 'Só um disco de cada vez, ok? Arranje um lugar para o que já pegou antes.';
divError1.id = 'errorNoMoreThanOne';
divError1.classList = 'notes';
notas.appendChild(divError1);

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

//Comportamento section#suspenso:
if (armazem.childElementCount > 1) {
    divError1.style.display = "block";
};

//Comportamento torres:
stacke1.addEventListener('click', function(torre1) {
    // let currentEventTarget = torre1.currentTarget;
    // if (stacke1.appendChild(disc1)) {
    //     currentEventTarget.childElementCount++
    // }

    // .lastElementChild //if (.lastElementCount > ) {divError.style.display = "block"}
    // .appendChild
    // .clientWidth
});
stacke2.addEventListener('click', function(torre2) {
    // let currentEventTarget = torre2.currentTarget;
    // if (stacke2.appendChild(disc1)) {
    //     torre2.childElementCount++
    // }
    // if (currentEventTarget.childElementCount === 4) {
    //     divError3.style.display = "block"
    // }

    // .lastElementChild

    // .clientWidth
});
stacke3.addEventListener('click', function(torre3) {
    // let currentEventTarget = torre3.currentTarget;
    // if (stacke3.appendChild(disc1)) {
    //     currentEventTarget.childElementCount++
    // }
    // if (currentEventTarget.childElementCount === 4) {
    //     divSuccess.style.display = "block"
    // };

    // .lastElementChild

    // .clientWidth
});

//Comportamento discos:
disc1.addEventListener('click', function(disco1) {
    // armazem.appendChild(disc1);
    // armazem.childElementCount++;

    // let currentEventTarget = torre1.currentTarget;
    // if (div1) {
    // } else {
    //     torre1.childElementCount--
    // }
    // .lastElementChild //if (.lastElementChild.clientWidth > ) {divError.style.display = "block"}

    // .clientWidth
});
disc2.addEventListener('click', function(disco2) {
    // armazem.appendChild(disc2);
    // armazem.childElementCount++;

    // let currentEventTarget = torre2.currentTarget;
    // .childElementCount //if (childElementCount === 4) {div(...).style.display = "block"(ok, a torre está completa mas não é aqui que ela deve ficar)}
    // .lastElementChild
    // .appendChild
    // .clientWidth
});
disc3.addEventListener('click', function(disco3) {
    // armazem.appendChild(disc3);
    // armazem.childElementCount++;

    // let currentEventTarget = torre3.currentTarget;
    // .childElementCount //if (childElementCount === 4) {divSuccess.style.display = "block"}
    // .lastElementChild
    // .appendChild
    // .clientWidth
});
disc4.addEventListener('click', function(disco4) {
    // armazem.appendChild(disc4);
    // armazem.childElementCount++;

    // let currentEventTarget = torre3.currentTarget;
    // .childElementCount //if (childElementCount === 4) {divSuccess.style.display = "block"}
    // .lastElementChild
    // .appendChild
    // .clientWidth
});




// Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar 
// qual torre foi clicada.
// Use a propriedade DOM  para saber quantos discos estão em uma torre.
// Use a propriedade DOM  para saber qual é o disco no topo da torre.
// Use o método DOM appendChild() para adicionar um disco a uma torre (você já usou este método várias vezes em tarefas anteriores). 
// Observe que quando você usa  em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e 
// adicionado no novo.
// Use a propriedade  para pegar o tamanho dos discos.

