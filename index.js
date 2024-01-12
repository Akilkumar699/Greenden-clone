
var navicon=document.getElementById("nav-icon")
var navsec=document.getElementById("nav-sec")
navicon.addEventListener("click",function(){
  navsec.style.right="0"
})

var closeicon=document.getElementById("close-nav")

closeicon.addEventListener('click',function(){
    navsec.style.right="-50%"
})  