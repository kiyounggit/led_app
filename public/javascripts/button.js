function changeBg(){

     var imgElement = document.getElementById("img_light");
      // var frm = document.getElementById("frm1");
      console.log(imgElement.src);
      if(imgElement.src.match("light_off")){
        console.log('Get light_on.png');
        imgElement.src='/images/light_on.png';
      }
      else{
        console.log('Get light_off.png');
        imgElement.src='/images/light_off.png';
      }
}
// changeBg();
function clicked(){
var buttonElement = document.getElementById("btn_button");
// buttonElement.addEventListener("click",changeBg);
buttonElement=document.addEventListener("click",changeBg);
console.log("click");
}
clicked();
