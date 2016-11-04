// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var allThumbnails = document.getElementsByClassName("thumbnail");
var modalIndex = -1;

// make the modal have the specific image that was clicked on
window.onclick = function(event) {
    if (event.target.parentElement.className != "thumbnail") {
      modal.style.display = "none";
    }
}

//get modalIndex
function getModalIndex(callback) {
  for(var x = 0; x < allThumbnails.length; x++) {
    allThumbnails[x].onclick = runWhenClicked;
  }
  function runWhenClicked() {
    document.body.style.background = event.target.id;
    modal.style.display = "flex";
    modalImg.src = event.target.src;
    var i = 0;
    while(allThumbnails[i] != this) {
      i++;
    }
    callback(i);
  }
}

getModalIndex(function(modalIndex){
  document.onkeydown = function(event) {
    if (event.keyCode == 39 && modalIndex < allThumbnails.length - 1) {
      modalImg.src = allThumbnails[++modalIndex].getElementsByTagName('img')[0].src;
    } else if (event.keyCode == 37 && modalIndex > 0) {
      modalImg.src = allThumbnails[--modalIndex].getElementsByTagName('img')[0].src;
    } else if (event.keyCode == 27) {
      modal.style.display = "none";
    }
  }
})

// Make the span element close the modal
document.getElementsByClassName("close").onclick = function() {
  modal.style.display = "none";
}
