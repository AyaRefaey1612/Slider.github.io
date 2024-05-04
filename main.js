let imgesArray=Array.from(document.querySelectorAll(".images img"));
noOFImages=imgesArray.length;
currntImage=1;
slideNumber=document.querySelector(".numbers");
prev=document.querySelector(".Previous");
nex=document.querySelector(".Next");
nex.onclick=neext;
prev.onclick=preeev;


function neext(){
  if(nex.classList.contains("disabled")){
    return false
  }else{
    currntImage++
    checker();
  }
};

function preeev(){
  if(prev.classList.contains("disabled")){
    return false
  }else{
    currntImage--
    checker();
  }
}
ul=document.createElement("ul");
ul.setAttribute("id" , "ul");

for(let i=1; i<= noOFImages; i++){
  li=document.createElement("li");
  li.setAttribute("id" , i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}

   slideNumber.appendChild(ul);
   
  var arrayOfLi=Array.from(document.querySelectorAll('#ul li')); 
  

  for(let i=0; i< arrayOfLi.length; i++){
    arrayOfLi[i].onclick=function(){
      currntImage=parseInt( arrayOfLi[i].getAttribute("id"));
      checker();
    }
  }

  checker();
function checker(){
  removeActive();
  document.querySelector(".images p span").innerHTML=currntImage;
  imgesArray[currntImage-1].classList.add("active");
  ul.children[currntImage-1].classList.add("active");
 
  if(currntImage == 1){
    prev.classList.add("disabled");
  }else{
    prev.classList.remove("disabled");
}
   
if(currntImage == noOFImages){
  nex.classList.add("disabled");
}else{
  nex.classList.remove("disabled");
}

}


function removeActive(){
  imgesArray.forEach(imge => {
    imge.classList.remove("active");
  });
  
  arrayOfLi.forEach(li => {
    li.classList.remove("active");
  });
  


}
