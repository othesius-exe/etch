$(document).ready(function() {
  var gridSize = prompt('Enter the dimensions for your grid. (Example: 16 will create a 16x16 grid.)');
  var gridHeight = gridSize;
  for (i = 0; i < gridSize; i ++) {
    $('.container').append('<div class="row">');
  }
  for (j = 0; j < gridHeight; j ++) {
    $('.container').append('<div class="col"');
  }
});
