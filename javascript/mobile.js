    function mobileDropdown(){
      var droppy = document.getElementById("droppy");
      droppy.classList.toggle("show");
    }
  console.log("ok so the mobile.js loads");
 
 
 function flip(evt, nChild) {
  var image = document.getElementsByClassName("image");
  var info = document.getElementsByClassName("info");

for(i=0; i<1; i++){
  
  if(info[nChild].style.display == "none"){
   
    info[nChild].style.display = "flex";
  }else{
      info[nChild].style.display = "none";
    
  }
}
}
 // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
 //coming back to this a mf has other shit to do 
 
 
 //this is so on mobile if you click outside of the little dropdwon it closes
/*   window.addEventListener("click", function(event) {
     var droppy = document.getElementById("droppy");
      if (event.target !== droppy) {
        droppy.classList.toggle("show");
    }
   });
  */