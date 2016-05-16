function changeBg(){
     var imgElement = document.getElementById("img_light");
      // var frm = document.getElementById("frm1");
      console.log(imgElement.src);
      if(imgElement.src.match("light_off")){
        imgElement.src="/images/light_on.png";
      }
      else{
        imgElement.src="/images/light_off.png";
      }
}
// changeBg();

function toggleImage(index){

   var imgElement = document.getElementById("img_light"+index);

   if(imgElement.src.match("light_off.png")){
      imgElement.src = "/images/light_on.png";
   }else{
      imgElement.src = "/images/light_off.png";
   }
}

function toggleImage0(){
   var imgElement = document.getElementById("img_light0");

   if(imgElement.src.match("light_off.png")){
      imgElement.src = "/images/light_on.png";
   }else{
      imgElement.src = "/images/light_off.png";
   }
}

function toggleImage1(){
   var imgElement = document.getElementById("img_light1");

   if(imgElement.src.match("light_off.png")){
      imgElement.src = "/images/light_on.png";
   }else{
      imgElement.src = "/images/light_off.png";
   }
}

function toggleImage2(){
   var imgElement = document.getElementById("img_light2");

   if(imgElement.src.math("light_off.png")){
      imgElement.src = "/images/light_on.png";
   }else{
      imgElement.src = "/images/light_off.png";
   }
}
