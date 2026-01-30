function expand() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore");
  
  if (btnText.innerHTML === "read less") {
    btnText.innerHTML = "read more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}
