// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
  
function makeGrid() {

  var h=document.getElementById('inputHeight').value;
  var w=document.getElementById('inputWidth').value;
 
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

function Cellc() {
        $("td").on("mousedown", function () {
            var color = $('#colorPicker').val();
            $(this).css("background-color", color);
        })
    };
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
  Cellc();
  
});