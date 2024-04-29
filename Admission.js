function more_act_ad() {
    let extraCon = document.getElementById("extra-ad");
    let butName= document.getElementById("more-button-ad");
    if (extraCon.style.display == "block") {
      extraCon.style.display = "none";
      butName.innerHTML ="More";
    } else {
      extraCon.style.display = "block";
      butName.innerHTML ="Less";
    }
  }