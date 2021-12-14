function output() {
  var img = document.getElementById("image");
  img.src = this.value;
  return false;
}
document.getElementById("outList").onchange = output;
