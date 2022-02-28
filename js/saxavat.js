
// function test() {
//     let menus =document.querySelectorAll("#body-wrapper #options .editor-content .row div ")
//     //menus[0].classList.add("selected")
//     menus[11].firstElementChild.click();

// }

// test();


//////////////////////////////////// 


//let klik =document.querySelector (".thumbnail>a>.caption")
//klik.addEventListener("click",function(){
    //alert("ok")
    
//})


//let klik =document.querySelector (".thumbnail>a>.caption")
//setInterval(function() {alert("ok")}, 4000);

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


