function changeBg(){

     var imgElement = document.getElementById("img_light");
      // var frm = document.getElementById("frm1");
      console.log(imgElement.src);
      if(imgElement.src.match("light_off")){
        imgElement.src='/images/light_on.png';
      }
      else{
        imgElement.src='/images/light_off.png';
      }
}
// changeBg();
