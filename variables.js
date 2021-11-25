let but = document.getElementById("show");
let fullbg = document.getElementById("container");
let butbg = document.getElementById("buttons");
var objHidden = true;
let but3= document.createElement("input");
let bg= document.getElementById("back");
var imgarray = ["img/img7.jpg","img/img8.jpg","img/img9.jpg","img/img10.jpg","img/img11.jpg","img/img12.jpeg","img/img13.jpg","img/img14.jpg","img/img15.jpg","img/img16.jpg","img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg","img/img6.jpg"];

butbg.append(but3);
but3.value="random";
but3.type="button";

bg.style.backgroundColor="red";
bg.style.width="75vw";
bg.style.height="75vh";
bg.style.display="none";
but3.style.display="none";
butbg.style.display="flex";



for (let i = 0; i < imgarray.length; i++) {

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src=imgarray[i];
    img.alt="...";
    img;
    bg.append(div);
    div.append(img);
    img.style.width="100%";
    img.style.height="100%";
    img.style.objectFit="cover";
    
}

but.addEventListener("click",function(){

    if(objHidden){

        objHidden = false;
        but.value="Hide";
        bg.style.display="grid";
        but3.style.display="block";

        but3.addEventListener("click",function(){

            for (let i = imgarray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                const temp = imgarray[i];
                imgarray[i] = imgarray[j];
                imgarray[j] = temp;
            }
            for (let j = 0; j < imgarray.length; j++) {
    
                let div=document.querySelectorAll("img");
    
                div[j].src=imgarray[j];
                
            }

        });
        
       
        

    }else{

        objHidden = true;
        but.value="Show";
        bg.style.display="none";
        but3.style.display="none";

    }

});
