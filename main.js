var grid = document.getElementById('sketch-grid');

for (let index = 1; index <= 256; index++) {
    grid.innerHTML += '<div class="grid-element"></div>';
}

var gridElement = document.getElementsByClassName('grid-element');

Array.from(gridElement).forEach(element => {
    element.addEventListener('mouseover', function(){ element.style.cssText = "background-color:black;"});
});