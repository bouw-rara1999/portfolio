
const button = document.getElementById("expand-button2");
const closeButton = document.getElementById("close-button2");
const block = document.getElementById("expandable-block2");

button.addEventListener("click", () => {
  block.focus();
});

closeButton.addEventListener("click", () => {
  block.blur();
});



document.getElementById("realisation").addEventListener("click", function() {
  document.getElementById("expandable-block").style.top = "0";
  document.getElementById("close-button").style.display = "block"; 
});

document.getElementById("close-button").addEventListener("click", function() {
  document.getElementById("expandable-block").style.top = "-100%";
  document.getElementById("close-button").style.display = "none";
});

document.querySelector("#mac").onclick = function() {
    var x = document.querySelector(".openContainer1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#marie").onclick = function() {
    var x = document.querySelector(".openContainer2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#service").onclick = function() {
    var x = document.querySelector(".openContainer3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#evenement").onclick = function() {
    var x = document.querySelector(".openContainer4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#pix").onclick = function() {
    var x = document.querySelector(".openContainer5");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#brevet").onclick = function() {
    var x = document.querySelector(".openContainer6");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#bac").onclick = function() {
    var x = document.querySelector(".openContainer7");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };


  document.querySelector("#droit").onclick = function() {
    var x = document.querySelector(".openContainer8");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#num").onclick = function() {
    var x = document.querySelector(".openContaine9");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  document.querySelector("#html").onclick = function() {
    var htmlLogo = document.querySelector("#html-logo");
    htmlLogo.style.display = "block";
    setTimeout(function() {
      htmlLogo.style.display = "none";
    }, 10000);
  }
  
  document.querySelector("#css").onclick = function() {
    var cssLogo = document.querySelector("#css-logo");
    cssLogo.style.display = "block";
    setTimeout(function() {
      cssLogo.style.display = "none";
    }, 10000);
  };

  document.querySelector("#javascript").onclick = function() {
    var jsLogo = document.querySelector("#js-logo");
    jsLogo.style.display = "block";
    setTimeout(function() {
      jsLogo.style.display = "none";
    }, 10000);
  };

  document.querySelector("#wordpress").onclick = function() {
    var wdLogo = document.querySelector("#wordpress-logo");
    wdLogo.style.display = "block";
    setTimeout(function() {
      wdLogo.style.display = "none";
    }, 10000);
  };

  document.querySelector("#github").onclick = function() {
    var githubLogo = document.querySelector("#github-logo");
    githubLogo.style.display = "block";
    setTimeout(function() {
      githubLogo.style.display = "none";
    }, 10000);
  };

  document.querySelector("#photoshop").onclick = function() {
    var psLogo = document.querySelector("#photoshop-logo");
    psLogo.style.display = "block";
    setTimeout(function() {
      psLogo.style.display = "none";
    }, 10000);
  };

