var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgd = document.getElementById('thermometre');
var imga = document.getElementById('thermometrea');
var modalImg = document.getElementById("img01");
//var captionText = document.getElementById("caption");
imgd.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.childNodes[0].src;
//    modalImg.alt = this.alt;
//    captionText.innerHTML = this.alt;
}
imga.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.childNodes[0].src;
//    modalImg.alt = this.alt;
//    captionText.innerHTML = this.alt;
}
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
    
 }    