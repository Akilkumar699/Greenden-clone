
var navicon=document.getElementById("nav-icon")
var navsec=document.getElementById("nav-sec")
navicon.addEventListener("click",function(){
  navsec.style.right="0"
})

var closeicon=document.getElementById("close-nav")

//Search-Section

closeicon.addEventListener('click',function(){
    navsec.style.right="-50%"
})  

var Searchinput=document.getElementById("Search-input")
var productContainer=document.querySelector("product-container")
var divContainer=document.querySelectorAll(".divcontanier")
// console.log(divContainer)
Searchinput.addEventListener('keyup',function(){
    var inputValue=event.target.value.toUpperCase()

    for(i=0;i<divContainer.length;i++){
        var h1List=divContainer[i].querySelector('h1')
        console.log(h1List)
        if(h1List.textContent.toUpperCase().indexOf(inputValue)<0){
            divContainer[i].style.display="none"
        }
        else{
            divContainer[i].style.display="block"
        }
    }

})