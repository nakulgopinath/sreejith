// When the user scrolls down 30px from the top of the document, resize the navbar's padding
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    // document.getElementById("navbar").style.padding = "15px 5%";
    document.getElementById("title").style.margin = "0px";
    document.getElementById("cinematographer").style.display = "none";
  } else {
    // document.getElementById("navbar").style.padding = "45px 5%";
    document.getElementById("title").style.margin = "0px 0px 15px";
    document.getElementById("cinematographer").style.display = "block";
  }
}
