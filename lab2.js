// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var h=document.getElementById('inputHeight').value;
var w=document.getElementById('inputWidth').value;
var cl=document.getElementById('colorPicker').value;


function makeGrid() {
 
    var table = document.getElementById("pixelCanvas");
    table.innerHTML = '';

  for(let i=0;i<h;i++)
  { var row = table.insertRow(0);
    for(let j=0;j<w;j++)
   { var cell1 = row.insertCell(0);
     cell1.innerHTML = " ";
   }
 }
}
 
 function colorgd(){
 cell = table.find('td');
  cell.click(function() {
    $(this).attr('bgcolor', cl);
  });
}
 
 $("#sizePicker").on("submit", function(evt) {
    makeGrid();
    colorgd();
    evt.preventDefault();
});

 
