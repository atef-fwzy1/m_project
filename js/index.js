let x = "off";
document.querySelector(".seting-box .set").addEventListener("click",()=>{
 

        document.querySelector(".seting-box .set i").classList.toggle("fa-spin");
        
        if(x === "off"){
            document.querySelector(".seting-box").style.cssText= " left: 0;"
            x ="one"
        }
        else{
            document.querySelector(".seting-box").style.cssText= " left: -45%;"
            x ="off"
        }
})

// show bullets 

let bullets =document.querySelectorAll(".rand-back .bullt span");
if(localStorage.getItem("bullets")){
    if(localStorage.getItem("bullets")  === "show")
            document.querySelector(".nav-bullets").style.cssText ="display:block;"
        else{

            document.querySelector(".nav-bullets").style.cssText ="display:none;"
              bullets.forEach((ele)=>{
            ele.classList.remove("active")
        })
            document.querySelector(`.rand-back .bullt span.${window.localStorage.getItem("bullets")}`).classList.add("active")
        }

}

bullets.forEach((eles)=>{
    eles.addEventListener("click",(e)=>{
        if(e.currentTarget.textContent ==="show"){
            window.localStorage.setItem("bullets","show");
            document.querySelector(".nav-bullets").style.cssText ="display:block;"
        }
        if(e.currentTarget.textContent ==="hide"){
            window.localStorage.setItem("bullets","hide");
            document.querySelector(".nav-bullets").style.cssText ="display:none;"

        }
        bullets.forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")

    })
})


if(window.localStorage.getItem("color")){
    document.querySelector(":root").style.cssText =`--main-color:${ window.localStorage.getItem("color")}`;
      document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
}
document.querySelectorAll(".seting-box .content ul li").forEach((e)=>{
    e.addEventListener("click",(el)=>{
        document.querySelectorAll(".seting-box .content ul li").forEach((ele)=>{
            ele.classList.remove("active")
    
        })
        el.currentTarget.classList.add("active");
        window.localStorage.setItem("color",el.currentTarget.dataset.color);
        document.querySelector(":root").style.cssText =`--main-color:${ window.localStorage.getItem("color")}`;
    })

    
})


document.querySelector(".main-landin .landing button").addEventListener("click",()=>{
    document.querySelector(".main-landin .conect-me").style.cssText ="display:flex;";
    setTimeout(()=>{
        document.querySelector(".main-landin .conect-me .acunts").style.cssText ="transform: scale(1.2);";
    },250)
    
})
  document.querySelector(".main-landin .conect-me .acunts i.no").addEventListener("click",()=>{
    document.querySelector(".main-landin .conect-me").style.cssText ="display:none;";
 })



// select all skills spans 

let skills = document.querySelector(".skills");
window.onscroll = function (){

// skills ofset top to sction 
 let skillsofsettop = skills.offsetTop;

// skills outer height 
let skillsouterheight  = skills.offsetHeight;


//window hight 
let windowheight = this.innerHeight;

// window scroll top by px (pageYOffset)
let windowscrolltop = this.pageYOffset;

if(windowscrolltop >= (skillsofsettop + skillsouterheight - windowheight )){
   document.querySelectorAll(".skills .skill-box .skill-progrsss span").forEach((ele)=>{
    ele.style.width = ele.dataset.progress;
   })}}


// gallery
let popup_overlay = document.querySelector(".popup-overlay");
popup_overlay.style.cssText ="display: none;";

let popup_box = document.querySelector(".popup-overlay .box-popup");
let img_alt= document.querySelector(".popup-overlay h3");
let img_off= document.querySelector(".popup-overlay .off");

let popup_img = document.querySelector(".popup-overlay .box-popup img");

let all_img_galarrey = document.querySelectorAll(".img-box img");
all_img_galarrey.forEach((e) =>{
    
    e.addEventListener("click", (ele)=>{
        if(this.innerWidth > 520 ){
            img_alt.textContent = "";
            if(ele.currentTarget.alt !== ""){
                img_alt.textContent = ele.currentTarget.alt;
            }
            
            popup_img.src =ele.currentTarget.src;
            popup_overlay.style.cssText ="display: flex;";
            setTimeout(()=>{
                
                popup_box.style.cssText ="  transform: scale(1);";
            },500)
        }
    })
})

img_off.addEventListener("click", (e) =>{
    popup_overlay.style.cssText ="display: none;";
})


let allbullet = document.querySelectorAll(".nav-bullets .bullt");
let linkis = document.querySelectorAll(".main-landin .header ul li a");
function scrollto(elments){
    elments.forEach((ele)=> {
        ele.addEventListener("click",(e)=>{
            document.querySelector(`${e.currentTarget.dataset.name}`).scrollIntoView({
                behavior:"smooth"
            })
            console.log(e.currentTarget.dataset.name)
        })
    })
    
}
scrollto(allbullet);
scrollto(linkis);

let list =document.querySelector("i.here")
list.addEventListener("click",(ele)=>{
    list.classList.toggle("fa-shake");
     list.classList.toggle("list");
    document.querySelector(".main-landin .header ul").classList.toggle("of");

})

// reset options
let restet =document.querySelector(".seting-box button");



restet.addEventListener("click",()=>
{
    window.localStorage.clear();
    window.location.reload();
})




