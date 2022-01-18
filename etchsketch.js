const DEFAULT_GRID = 16;

//Document element variables
let buttonSubmit = document.getElementById('inputSubmit');
let gridContainer = document.getElementById('container');

document.onload = gridCreate(DEFAULT_GRID);
buttonSubmit.addEventListener('click', sizeSubmit);

function sizeSubmit(){
    gridReset();
    let inputAmount = Number(document.getElementById('inputAmount').value);
    if (!inputAmount){
        gridCreate(16);
        document.getElementById('warningMessage').style.display = 'none';
    } else if(inputAmount < 101){
        gridCreate(inputAmount);
        document.getElementById('warningMessage').style.display = 'none';
    }
    else {
        inputCheck();
    }
}

function randomColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+randomColor
}
function colorFun(){
    let gridDivs = document.getElementsByClassName('gridDiv')
    for (var i = 0; i < gridDivs.length; i++){
        gridDivs[i].addEventListener('mouseover', function(e){
        let targetColor = e.target.style.backgroundColor;
        if (!targetColor){
            let bgColor = randomColor();
            e.target.style.backgroundColor = bgColor;
            }
     }
    )}
}


function gridCreate(inputAmount){
    let totalDivs = inputAmount * inputAmount
    let divWH = 600 / inputAmount;
    console.log(divWH);
    gridContainer.style.gridTemplateColumns = `repeat(${inputAmount}, ${divWH}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${inputAmount}, ${divWH}px)`;
    for (let i = 1; i < (totalDivs +1); i++){
        var divElement = document.createElement('div');
        divElement.setAttribute('class','gridDiv');
        gridContainer.appendChild(divElement);
        }
    
    colorFun();
}

function gridReset(){
    gridContainer.innerHTML = '';
}

function inputCheck(){
    let buttonContainer = document.getElementById('buttonContainer');
    let warningMessage = document.createElement('div');
    warningMessage.textContent = 'Please enter a number less than 100';
    warningMessage.setAttribute('class', 'warningMessage');
    warningMessage.setAttribute('id', 'warningMessage');
    buttonContainer.appendChild(warningMessage);
}


