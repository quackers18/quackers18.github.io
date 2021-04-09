console.log("ok so the pc.js loads");

function flip(evt, nChild) {
  var image = document.getElementsByClassName("image");
  var info = document.getElementsByClassName("info");

for(i=0; i<1; i++){
  
  if(image[nChild].style.display == "none" && info[nChild].style.display !=="none"){
    image[nChild].style.display = "flex";
    info[nChild].style.display = "none";
  }else{
      image[nChild].style.display = "none";
    info[nChild].style.display = "flex";
  }
}
}
