const canvasContainer = document.querySelector('#canvas-container');
const templateSelect = document.querySelector('#template-select');

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

canvasContainer.addEventListener('mouseover',changeCellColor);

function changeCellColor(event){
    let target = event.target;
    if(target.classList.contains('blank')){
        target.style.backgroundColor = 'black';
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