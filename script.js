const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(e){
    //console.log(e);
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
});
const cursorBlur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove",function(e){
    //console.log(e);
    cursorBlur.style.left = e.x - 65 +"px";
    cursorBlur.style.top = e.y -65 +"px";
});

// const boxes = document.querySelectorAll('.box');

// boxes.forEach(function(box) {
//     box.addEventListener('mouseenter', function() {
//         const overlay = box.querySelector('.overlay');
//         console.log(box);
//         overlay.style.transform = 'translateY(0%)';
//         overlay.style.cursor = 'pointer';
//         // console.log("hi");
//     });

//     box.addEventListener('mouseleave', function() {
//         const overlay = box.querySelector('.overlay');
//         overlay.style.transform = 'translateY(100%)';
//         // console.log("hello");
//     });
// });
const h4all = document.querySelectorAll(".navber h4");
h4all.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        // console.log(e);
        cursor.style.scale=1.5;
        cursor.style.border="1px solid white";
        cursor.style.backgroundColor="transparent";
    })
    e.addEventListener("mouseleave", function(){
        // console.log(e);
        cursor.style.scale=1;
        cursor.style.border="none";
        cursor.style.backgroundColor="black";
    })
})

gsap.to(".navber", {
    backgroundColor:"rgba(57, 34, 34, 1)",
    duration:0.5,
    scrollTrigger:{
        trigger:".navber",
        scroller:"body",
        // markers: true,
        start:"top -30%",
        scrub:1
    }
})
gsap.to("main", {
    backgroundColor:"rgba(109, 77, 10, 1)",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        //markers:true,
        start:"top -50%",
        end:"top -100%",
        scrub:true
    }
})

gsap.from(".page3 img , #about", {
    y:50,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".page3",
        scroll:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:3,
    }

})



gsap.from(".page5", {
    scale:0.8,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".page5",
        scroll:"body",
        //markers:true,
        start:"top 90%",
        end:"top 48%",
        scrub:3,
    }

})

gsap.from(".text", {
    y:60,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".page6",
        scroll:"body",
        //markers:true,
        start:"top 30%",
        end:"top 58%",
        scrub:3,
    }

})