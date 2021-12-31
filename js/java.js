function event5(){
   // ======================================
   const full6 = document.getElementById("fullScreen");
   const event5 = document.getElementById("event5");
   full6.style.width="100%";
   full6.style.transition="all 3s ease-in-out 0s";
   full6.classList.add("fullscreen2");
   event5.style.display="flex";
   event5.style.flex="row";
   event5.style.wrap="wrap";
   event5.style.justifyContent='center';
   event5.style.marginTop='40px';
 }

 function event1(){
   // ======================================
   const full1 = document.getElementById("fullScreen");
   const event1 = document.getElementById("event1");
   full1.style.width="100%";
   full1.style.transition="all 3s ease-in-out 0s";
   full1.classList.add("fullscreen2");
   event1.style.display="flex";
   event1.style.flex="row";
   event1.style.wrap="wrap";
   event1.style.justifyContent='center';
   event1.style.marginTop='40px';
 }
 

 function event2(){
  // ======================================
  const full31 = document.getElementById("fullScreen");
  const event2 = document.getElementById("event2");
  full31.style.width="100%";
  full31.style.transition="all 3s ease-in-out 0s";
  full31.classList.add("fullscreen2");
  event2.style.display="flex";
  event2.style.flex="row";
  event2.style.wrap="wrap";
  event2.style.justifyContent='center';
  event2.style.marginTop='40px';
}
function event3(){
  // ======================================
  const full4 = document.getElementById("fullScreen");
  const event3 = document.getElementById("event3");
  full4.style.width="100%";
  full4.style.transition="all 3s ease-in-out 0s";
  full4.classList.add("fullscreen2");
  event3.style.display="flex";
  event3.style.flex="row";
  event3.style.wrap="wrap";
  event3.style.justifyContent='center';
  event3.style.marginTop='40px';
}
function event4(){
  // ======================================
  const full4 = document.getElementById("fullScreen");
  const event4 = document.getElementById("event4");
  full4.style.width="100%";
  full4.style.transition="all 3s ease-in-out 0s";
  full4.classList.add("fullscreen2");
  event4.style.display="flex";
  event4.style.flex="row";
  event4.style.wrap="wrap";
  event4.style.justifyContent='center';
  event4.style.marginTop='40px';
}

function event6(){
  // ======================================
  const full41 = document.getElementById("fullScreen");
  const event6 = document.getElementById("event6");
  full41.style.width="100%";
  full41.style.transition="all 3s ease-in-out 0s";
  full41.classList.add("fullscreen2");
  event6.style.display="flex";
  event6.style.flex="row";
  event6.style.wrap="wrap";
  event6.style.justifyContent='center';
  event6.style.marginTop='40px';
}
function event7(){
  // ======================================
  const full41 = document.getElementById("fullScreen");
  const event7 = document.getElementById("event7");
  full41.style.width="100%";
  full41.style.transition="all 3s ease-in-out 0s";
  full41.classList.add("fullscreen2");
  event7.style.display="flex";
  event7.style.flex="row";
  event7.style.wrap="wrap";
  event7.style.justifyContent='center';
  event7.style.marginTop='40px';
}
function event8(){
  // ======================================
  const full41 = document.getElementById("fullScreen");
  const event8 = document.getElementById("event8");
  full41.style.width="100%";
  full41.style.transition="all 3s ease-in-out 0s";
  full41.classList.add("fullscreen2");
  event8.style.display="flex";
  event8.style.flex="row";
  event8.style.wrap="wrap";
  event8.style.justifyContent='center';
  event8.style.marginTop='40px';
}

function event9(){
  // ======================================
  const full41 = document.getElementById("fullScreen");
  const event9 = document.getElementById("event9");
  full41.style.width="100%";
  full41.style.transition="all 3s ease-in-out 0s";
  full41.classList.add("fullscreen2");
  event9.style.display="flex";
  event9.style.flex="row";
  event9.style.wrap="wrap";
  event9.style.justifyContent='center';
  event9.style.marginTop='40px';
} 

 function closeNav( ){
   var event5 = document.getElementById("event5");
    var event1 = document.getElementById("event1");
    const event2 = document.getElementById("event2");
    const event3 = document.getElementById("event3");
    const event4 = document.getElementById("event4");
    const event6 = document.getElementById("event6");
    const event7 = document.getElementById("event7");
    const event8 = document.getElementById("event8");
    const event9 = document.getElementById("event9");

    document.getElementById("fullScreen").style.width="0px";
    event5.style.display="none";
    event1.style.display="none";
    event2.style.display="none";
    event3.style.display="none";
    event4.style.display="none";
    event6.style.display="none";
    event7.style.display="none";
    event8.style.display="none";
    event9.style.display="none";

 }
//  ===================make photo full Screen==========================
document.querySelectorAll(".photo").forEach( image =>{
  image.onclick = function( ) {
     if(image.webkitRequestFullscreen){
     image.webkitRequestFullscreen( );
  } 
  }
 
}

)