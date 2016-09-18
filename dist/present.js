var slides = [];
var slideNo;

function splitSlides(text){
  return text.split("<!--nextslide-->");
}

function showSlide(markdown){
  var slide = document.getElementById("slide");

  slide.innerHTML = marked(markdown);
  findCodeBlocks();
}

function findCodeBlocks(){
  var codeblocks = slide.getElementsByTagName("pre");

  for (var i = 0; i < codeblocks.length; i++) {
    var canvas = document.createElement("canvas");

    var runBtn = document.createElement("div");
    runBtn.classList.add("runbutton");

    var block = codeblocks[i];

    runBtn.addEventListener('click', function() {
      console.log(block.getElementsByTagName("code")[0].innerText);
      console.log(canvas);
      var p = new Processing(canvas, block.getElementsByTagName("code")[0].innerText);
    }, true);
    
    codeblocks[i].parentNode.insertBefore(canvas,codeblocks[i].nextElementSibling);
    codeblocks[i].appendChild(runBtn);
    codeblocks[i].contentEditable = true;
  }
}

function nextSlide(){
  if (slideNo < slides.length - 1) {
    slideNo++;
    showSlide(slides[slideNo]);
  }
}

function prevSlide(){
  if (slideNo > 0) {
    slideNo--;
    showSlide(slides[slideNo]);
  }
}

function keyParser(keyCode,ctrlKey,altKey,shiftKey) {
  console.log(keyCode);
  console.log(altKey);
  if (altKey && (keyCode === 39 || keyCode === 40)){
    nextSlide();
  }
  if (altKey && (keyCode === 37 || keyCode === 38)){
    prevSlide();
  }
}

function init() {

  var file = getUrlParameter("file");
  slideNo = getUrlParameter("slide");

  if (!file)
    return;

  if (!slideNo) slideNo = 0;

  ajax.get("slides/"+file+".md", function(fileContents) {
    slides = splitSlides(fileContents);
    //showSlide(slides[slideNo]);
    showSlide(slides[2]);
  });
}

window.addEventListener('load', function() { init() });
window.addEventListener('keydown', function(e) { keyParser(e.keyCode,e.ctrlKey,e.altKey,e.shiftKey) });
