var slides = [];
var slideNo;
var file;

function showSlide(markdown){
  var slide = document.getElementById("slide");

  history.pushState(null, null, "?file="+file+"&slide="+slideNo);

  slide.innerHTML = marked(markdown);
  renderCodeBlocks();
}

function renderCodeBlocks(){
  var codeblocks = slide.getElementsByTagName("pre");

  var l = codeblocks.length;
  for (var i = 0; i < l; i++) {
    var codeContainer = document.createElement("div");
    codeContainer.classList.add("codeContainer");
    codeblocks[i].parentNode.insertBefore(codeContainer, codeblocks[i]);
    codeContainer.appendChild(codeblocks[i]);
    
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
      if (canvas.p !== undefined){
        canvas.p.exit();
      }
      canvas.p = new Processing(canvas, mirror.getValue());
    }, true); 

    mirror.display.wrapper.parentNode.insertBefore(canvasContainer,mirror.display.wrapper.nextElementSibling);
    codeContainer.parentNode.insertBefore(runBtn, codeContainer);
  }
}

function splitSlides(text){
  return text.split("<!--nextslide-->");
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
  file = getUrlParameter("file");
  slideNo = getUrlParameter("slide");

  if (!file) {
    document.write("No file selected.");
    return;
  }

  if (!slideNo) slideNo = 0;

  ajax.get("slides/"+file+".md", function(fileContents) {
    slides = splitSlides(fileContents);
    showSlide(slides[slideNo]);
  });
}

window.addEventListener('load', function() { init() });
window.addEventListener('keydown', function(e) { keyParser(e.keyCode,e.ctrlKey,e.altKey,e.shiftKey) });
