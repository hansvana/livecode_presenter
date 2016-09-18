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
  console.log(codeblocks.length)

  var l = codeblocks.length;
  for (var i = 0; i < l; i++) {
    console.log(codeblocks.length,i);
    var canvasContainer = document.createElement("div");
    canvasContainer.classList.add("canvasContainer");
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = "100";
    canvasContainer.appendChild(canvas);

    var runBtn = document.createElement("div");
    runBtn.classList.add("runbutton");

    var mirror = CodeMirror(function(el) {
          codeblocks[i].parentNode.replaceChild(el, codeblocks[i]);
        } , {
          lineNumbers: true,
          value: codeblocks[i].getElementsByTagName("code")[0].innerText,
          mode:  "text/x-java"
        });

    runBtn.addEventListener('click', function() {
      var p = new Processing(canvas, mirror.getValue());
    }, true); 

    mirror.display.wrapper.parentNode.insertBefore(canvasContainer,mirror.display.wrapper.nextElementSibling);
    mirror.display.wrapper.parentNode.insertBefore(runBtn,mirror.display.wrapper);
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
    showSlide(slides[slideNo]);
  });
}

window.addEventListener('load', function() { init() });
window.addEventListener('keydown', function(e) { keyParser(e.keyCode,e.ctrlKey,e.altKey,e.shiftKey) });
