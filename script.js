const canvasContainer = document.querySelector('#canvas-container');
const templateSelect = document.querySelector('#template-select');

const newGridButton = document.querySelector('#new-grid-btn');
const cellX = document.querySelector('#cell-x');
const cellY = document.querySelector('#cell-y');

const colorPicker = document.querySelector('#color-picker');
const colorRainbow = document.querySelector('#color-rainbow');

initCanvas(16,16);

function initCanvas(cellX, cellY){

    for(let i = 0; i < cellY; i++){
        const cellRow = document.createElement('div');
        cellRow.classList.add('cell-row');
        for(let j = 0; j < cellX; j++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('blank')
            cellRow.appendChild(cell);
        }
        canvasContainer.appendChild(cellRow);
    }
}

templateSelect.addEventListener('click',changeGridTemplate);

function changeGridTemplate(event){
    let target = event.target;
    switch(target.id){
        case 'square-16':
            canvasContainer.replaceChildren();
            initCanvas(16,16);
            break;
        case 'square-32':
            canvasContainer.replaceChildren();
            initCanvas(32,32);
            break;
        case 'square-64':
            canvasContainer.replaceChildren();
            initCanvas(64,64);
            break;
    }
}

newGridButton.addEventListener('click', createCustomGrid);

function createCustomGrid(){
    canvasContainer.replaceChildren();
    let x = cellX.value;
    let y = cellY.value;
    initCanvas(x,y);
    
}

let isMouseDown = false;
canvasContainer.addEventListener('mousedown', () => isMouseDown = true);
document.body.onmouseup = () => isMouseDown = false;

canvasContainer.addEventListener('mouseover',drawOnCanvas);

function drawOnCanvas(event){
    if(event.type === 'mouseover' && !isMouseDown) return;
    let target = event.target;
    if(target.classList.contains('blank')){
        target.style.backgroundColor = 'black';
    }
}