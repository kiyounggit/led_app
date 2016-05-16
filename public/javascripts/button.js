
// changeBg();
function clicked(){
var buttonElement = document.getElementById("btn_button");
// buttonElement.addEventListener("click",changeBg);
buttonElement=document.addEventListener("click",toggleImage);
console.log("click");
}
clicked();
