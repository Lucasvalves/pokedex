//pegar o elemento
var appElement = document.querySelector("#app"); //busca a div com id='app


var divTitulo = document.createElement('div');
var divFundo = document.createElement('div');
var divInput = document.createElement('div');
var divExbicao = document.createElement('div');
var divInputsRadio = document.createElement('div');
var divExbicaoInfo = document.createElement('div');
var labelNome = document.createElement('label');
var inputNome = document.createElement('input');
var labelPoder = document.createElement('label');
var inputPoder = document.createElement('input');
var labelTipo = document.createElement('label');
var labelAtaque = document.createElement('label');
var inputAtaque = document.createElement('input');
var labelDefesa = document.createElement('label');
var inputDefesa = document.createElement('input');
var selectTipo = document.createElement('select');
var labelFoto = document.createElement('label');
var inputFoto = document.createElement('input');
var labelLendario = document.createElement('label')
var labelS = document.createElement('label');
var inputLendarioS = document.createElement('input');
var labelN = document.createElement('label');
var inputLendarioN = document.createElement('input');
var btnAdicionar = document.createElement('button'); //cria um elemento botão


divTitulo.setAttribute('id','titulo');
divFundo.setAttribute('id','fundo');
divInput.setAttribute('class','exbicaoInput');
divInputsRadio.setAttribute('id', 'box-radio');
divInputsRadio.setAttribute('class', 'box');
labelNome.setAttribute('class','labels');
inputNome.setAttribute('class','inputs');
labelPoder.setAttribute('class','labels');
inputPoder.setAttribute('class','inputs');
labelAtaque.setAttribute('class','labels');
inputAtaque.setAttribute('type', 'number');
labelDefesa.setAttribute('class','labels');
inputDefesa.setAttribute('type', 'number');
labelTipo.setAttribute('class','labels');
selectTipo.setAttribute('class','select');

for( let x = 0; x <=0; x++){

    selectTipo.options[selectTipo.options.length] = new Option('Agua', 'Agua');
    selectTipo.options[selectTipo.options.length] = new Option('Fogo', 'Fogo');
    selectTipo.options[selectTipo.options.length] = new Option('Psiquico', 'Psiquico');
    selectTipo.options[selectTipo.options.length] = new Option('Planta', 'Planta');
}
labelFoto.setAttribute('class','labels')
labelFoto.setAttribute('for', 'foto');
inputFoto.setAttribute('type', 'text');
inputFoto.setAttribute('name', 'foto');
inputFoto.setAttribute('value', '');
labelLendario.setAttribute('class','labels');
labelS.setAttribute('class','labelSN');
inputLendarioS.setAttribute('type', 'radio');
inputLendarioS.setAttribute('name', 'lendario');
inputLendarioS.setAttribute('value', 'Sim');
labelN.setAttribute('class','labelSN');
inputLendarioN.setAttribute('type', 'radio');
inputLendarioN.setAttribute('name', 'lendario');
inputLendarioN.setAttribute('value', 'Não');
btnAdicionar.setAttribute('class', 'add');
divExbicao.setAttribute('class','exbicaoPrenchido');


divTitulo.appendChild(document.createTextNode('POKEDEX'));
labelNome.appendChild(document.createTextNode('Nome:'));
labelPoder.appendChild(document.createTextNode('Poder:'));
labelAtaque.appendChild(document.createTextNode('Ataque:'));
labelDefesa.appendChild(document.createTextNode('Defesa:'));
labelTipo.appendChild(document.createTextNode('Tipo:'));
labelFoto.appendChild(document.createTextNode('Foto:'));
labelLendario.appendChild(document.createTextNode('Lendário?'));
labelS.appendChild(document.createTextNode('Sim'));
labelN.appendChild(document.createTextNode('Não'));
btnAdicionar.appendChild(document.createTextNode('ADICIONAR')); //acrescenta o rotulo ao botão
appElement.appendChild(divTitulo);
appElement.appendChild(divFundo);
divFundo.appendChild(divInput);
divInput.appendChild(labelNome);
divInput.appendChild(inputNome);
divInput.appendChild(labelPoder);
divInput.appendChild(inputPoder);
divInput.appendChild(labelAtaque);
divInput.appendChild(inputAtaque);
divInput.appendChild(labelDefesa);
divInput.appendChild(inputDefesa);
divInput.appendChild(labelTipo);
divInput.appendChild(selectTipo);
divInput.appendChild(labelFoto);
divInput.appendChild(inputFoto);
divFundo.appendChild(divExbicao);
divInputsRadio.appendChild(labelLendario);
divInputsRadio.appendChild(labelS);
divInputsRadio.appendChild(inputLendarioS);
divInputsRadio.appendChild(labelN);
divInputsRadio.appendChild(inputLendarioN);
divInput.appendChild(divInputsRadio);
divInput.appendChild(btnAdicionar);
divExbicao.appendChild(divExbicaoInfo);  

btnAdicionar.onclick = function() {
    
    
    var resultadoRadio = document.querySelector('input[name="lendario"]:checked').value;
    
    var cardContainer = document.createElement('div');
        cardContainer.setAttribute('id', `__card_${inputNome.value}`);
        cardContainer.setAttribute('class', 'card');
        cardContainer.innerHTML = `<div id="__card_img_${inputNome.value}_${inputAtaque.value}" class="img" ></div><div id="__card_info_${inputNome.value}_${inputAtaque.value}" class="info" ></div>`;
    divExbicaoInfo.appendChild(cardContainer);
    
    var cardImage = document.getElementById(`__card_img_${inputNome.value}_${inputAtaque.value}`);
    var image = document.createElement('img');
    
    image.setAttribute('src', `${inputFoto.value}`);
    image.setAttribute('class', 'http-img');
    cardImage.appendChild(image);

    var cardInfome =  document.getElementById(`__card_info_${inputNome.value}_${inputAtaque.value}`);
    cardInfome.innerHTML = `<h4>Nome: ${inputNome.value}</h4><h4>Poder: ${inputPoder.value}</h4><h4>Ataque: ${inputAtaque.value}</h4><h4>Defesa: ${inputDefesa.value}</h4><h4>Tipo: ${selectTipo.value}</h4><h4>Lendário: ${resultadoRadio}</h4>`;

}
