

let menus =document.querySelectorAll(".menu .box")
let contents=document.querySelectorAll(".content .box")
for(let menu of menus)
{
    menu.addEventListener("click",function()
    {
        document.querySelector(".menu .box.selected").classList.remove("selected")
        this.classList.add("selected");
        let data_id=this.getAttribute("data-id");

        for(let content of contents)
        {
            if(data_id==content.getAttribute("data-id"))
            {
                content.classList.remove("d-none")
            }
            else{
                content.classList.add("d-none")
            }
            
        }
        

    })
}
//.col-md-4 .thumbnail
// window.addEventListener('load',function(){
//     let menus =document.querySelectorAll("#body-wrapper .row .col-md-offset-2 .row ")
//     //menus[0].classList.add("selected")
//     menus[0].click();

// })

// window.addEventListener('load',function(){
//     let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row .form-group .col-md-5 div")
//     //menus[0].classList.add("selected")
//     menus[0].classList.add("choice-selected")

// })

window.addEventListener('load',function(){
    this.alert("ok")

})

function test() {
    let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row div ")
    //menus[0].classList.add("selected")
    menus[11].firstElementChild.click();

}

test();

function starts(){

    let start =document.getElementsByTagName("iframe")
    if(start.hasAttribute("frameborder"))
    {
        function test()
         {
            let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row div ")
            menus[11].firstElementChild.nextElementSibling.click();
            test();
        }
        starts(); 
    } 
}

starts();


    function test()
     {
        let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row div ")
        menus[11].firstElementChild.nextElementSibling.click();
    
    }
    test();


let start =document.getElementsByTagName("iframe")
console.log(start.hasAttribute("frameborder"))

//////////////////////////////////// 


function test() {
    let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row div ")
    menus[11].firstElementChild.click();

}
test();


let klik =document.querySelector (".thumbnail>a>.caption")
klik.addEventListener("click",function(){
    
    function test() {
        let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row div ")
        menus[11].firstElementChild.click();
    
    }
    test();
})
//////////////////////////////////////////

let klik =document.querySelector (".thumbnail>a>.caption")
klik.addEventListener("click",function(){
    alert("ok")
    
})

////////////////////////
let klik =document.querySelector (".thumbnail>a>.caption")
klik.addEventListener("click",setTimeout 
(
    function()
    {
        alert("ok")
    }
),1000)

let klik =document.querySelector (".thumbnail>a>.caption")
klik.addEventListener("click", function(){
    setTimeout(function(){
        console.clear()
    }, 0);
});


let klik =document.querySelector (".thumbnail>a>.caption")
setInterval(function() {alert("ok")}, 4000);


let klik =document.querySelector (".first-hd")
klik.addEventListener("click",function(){
    
    setInterval(function() {alert("ok")}, 1000);
})

