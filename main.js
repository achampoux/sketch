var grid = document.getElementById('sketch-grid');

function generateGrid(rows){

grid.style.cssText = "grid-template-columns: repeat(" + rows + ", 1fr);grid-template-rows: repeat(" + rows + ", 1fr);";

let totalCells = rows * rows;
grid.innerHTML = '';

for (let index = 1; index <= totalCells; index++) {
    grid.innerHTML += '<div class="grid-element"></div>';
}

var gridElement = document.getElementsByClassName('grid-element');

Array.from(gridElement).forEach(element => {
    element.addEventListener('mouseover', function(){ element.style.cssText = "background-color:black;"});
});

}

generateGrid(16);

var gridGenerator = document.getElementById('grid-generator');
var userPrompt = 0;

gridGenerator.addEventListener('click', function(){
    userPrompt = 0;
    while(userPrompt <= 0 || userPrompt > 100){
    userPrompt = prompt("How many rows for the new grid? (1-100)");
    generateGrid(userPrompt);
    }
})