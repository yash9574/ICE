window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height= "60px";
    document.getElementById("t1").style.fontSize = "31px";
    document.getElementById("t2").style.fontSize = "11px";
    document.getElementById("logo_img").style.height = "60px";
    document.getElementById("logo_img").style.width = "60px";
  } else {
    document.getElementById("header").style.height= "100px";
    document.getElementById("t1").style.fontSize = "52px";
    document.getElementById("t2").style.fontSize = "19px";
    document.getElementById("logo_img").style.height = "100px";
    document.getElementById("logo_img").style.width = "100px";
  }

}

function more_act_ann() {
  console.log("ok");
  let extraCon = document.getElementById("a-row-hidden");
  let butName= document.getElementById("more-button-ann");
  if (extraCon.style.display == "flex") {
    extraCon.style.display = "none";
    butName.innerHTML ="More";
  } else {
    extraCon.style.display = "flex";
    butName.innerHTML ="Less";
  }
}
function more_act_news() {
  let extraCon = document.getElementById("extraNews");
  let butName= document.getElementById("more-button-news");
  if (extraCon.style.display == "block") {
    extraCon.style.display = "none";
    butName.innerHTML ="More";
  } else {
    extraCon.style.display = "block";
    butName.innerHTML ="Less";
  }
}

let slideIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
  show(slideIndex);
});
function change(n) {
  show((slideIndex += n));
}
function show(n) {
  let i;
  let slides = document.getElementsByClassName("slide1");
  if (n >= slides.length) {
    slideIndex = 0;
  } // reset
  if (n < 0) {
    slideIndex = slides.length - 1;
  }// reset
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

