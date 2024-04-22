let galerry_img = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"];


    function backoption(){
        
        let num =0;
        handelar =  setInterval(()=>{
            document.querySelector(".gallery-tophone .box-imgs img").src =/images/+galerry_img[num] ;
            num++;
            if(num == 8){
                num =  1;
            }
        },3000)
    
    } 
    if(this.innerWidth <= 519 ){

        backoption();
    }
  

    

let handelar;

let arr_img = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"];
 function backoption(){

     let num =0;
    handelar =  setInterval(()=>{
         document.getElementById("ma-landing").style.backgroundImage =`url("images/${arr_img[num]}")`;
         num++;
         if(num == 8){
             num =  1;
         }
        },3000)
    } 


// strat option randam background
if(window.localStorage.getItem("mode") === "no"){
    clearInterval(handelar);
    document.querySelectorAll(".rand-back .bcak span").forEach((e)=>{
      e.classList.remove("active");
  })
    document.querySelector(`.rand-back .bcak span.${window.localStorage.getItem("mode")}`).classList.add("active")
}else{
    backoption();
}


document.querySelectorAll(".rand-back .bcak span").forEach((e)=>{
e.addEventListener("click",(e)=>{
if(e.currentTarget.textContent === "Yes"){
    window.localStorage.setItem("mode","yes")
 backoption();
}
else{

    window.localStorage.setItem("mode","no")
     clearInterval(handelar);
}
document.querySelectorAll(".rand-back .bcak span").forEach((e)=>{
      e.classList.remove("active");
  })
  e.currentTarget.classList.add("active");
})
})
// end option randam background

    // / start about me background/
    let arr_imgs=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg"]
     function backoption_about(){
    
         let num =0;
        handelar =  setInterval(()=>{
             document.querySelector(".container .about-me .img").style.backgroundImage =`url("images/${arr_imgs[num]}")`;
             document.querySelector(".gallery-tophone img").src =`"images/${arr_imgs[num]}"`;
             num++;
             console.log(  document.querySelector(".gallery-tophone img").src )
             if(num == 13){
                 num =  1;
             }
            },3000)
        } 
        backoption_about();
    // /end about me background


