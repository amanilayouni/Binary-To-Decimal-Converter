function decimaltobinary(){
  var ui = Number(document.getElementById("userInput").value);
  document.getElementById("output").value=ui.toString(2);
}

function DecBin(ui){
    ch="";
    while(ui!=0){
      r=ui%2;
      ch=r.toString()+ch;
      ui=parseInt(ui/2);
    }
    return ch;
  }
function reseett(){
    document.getElementById("userInput").value="";
    document.getElementById("output").value="";
  }
  