
function test() {
    let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row div ")
    //menus[0].classList.add("selected")
    menus[11].firstElementChild.click();

}

test();


//////////////////////////////////// 


let klik =document.querySelector (".thumbnail>a>.caption")
klik.addEventListener("click",function(){
    alert("ok")
    
})


let klik =document.querySelector (".thumbnail>a>.caption")
setInterval(function() {alert("ok")}, 4000);


