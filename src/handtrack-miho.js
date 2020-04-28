var myDiv = document.getElementById('mydiv');
const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let updateNote = document.getElementById("updatenote");
let isVideo = false;
let model = null;

const modelParams = {
  flipHorizontal: true, // flip e.g for video  
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.6, // confidence threshold for predictions.
}

window.onload = function () {
  toggleVideo();
};


function startVideo() {
  handTrack.startVideo(video).then(function (status) {
    if (status) {
      isVideo = true
      runDetection()
    }
  });
}

function toggleVideo() {
  if (!isVideo) {
    startVideo();
  } else {
    handTrack.stopVideo(video)
    isVideo = false;
  }
}

function runDetection() {
  model.detect(video).then(predictions => {
    if (predictions[0] != undefined) {
      x = predictions[0].bbox[0];
      y = predictions[0].bbox[1];
      console.log("URL BARRE: "+window.location.href)
      //console.log("Predictions: ", predictions[0].bbox[0]);
      // myDiv.style.position = "absolute";
      // myDiv.style.left = (predictions[0].bbox[0] * 3) + 'px';
      // myDiv.style.top = (predictions[0].bbox[1] * 6) + 'px';

      // Sy X est a droite & Y ni trop bas, ni trop haut, DROITE
      if (x >= 370 && (y>=200 && y<=300)) {
        if(window.location.href !=document.getElementById("rightURL").innerHTML){
          console.log("SWIPE DROITE VERS: "+document.getElementById("rightURL").innerHTML);
          window.location.replace(document.getElementById("rightURL").innerHTML);
        }else{
          console.log("SWIPE DROITE MAIS MÊME URL");
        }
      }

      // Sy X est a gauche & Y ni trop bas, ni trop haut, GAUCHE
      else if (x <= 30 && (y>=200 && y<=300)) {
        if(window.location.href !=document.getElementById("leftURL").innerHTML){
          console.log("SWIPE GAUCHE VERS: "+document.getElementById("leftURL").innerHTML);
          window.location.replace(document.getElementById("leftURL").innerHTML);
        }
        else{
          console.log("SWIPE GAUCHE MAIS MÊME URL");
        }
      }
      // Sy X est ni trop bas, ni trop haut & Y bas, BAS
      else if ((x >= 30 && x<=380) && y>=410) {
        if(window.location.href !=document.getElementById("bottomURL").innerHTML){
          window.location.replace(document.getElementById("bottomURL").innerHTML);
          console.log("SWIPE BAS VERS: "+document.getElementById("bottomURL").innerHTML);
        }else{
          console.log("SWIPE BAS MAIS MÊME URL");
        }
      }
      // Sy X est ni trop bas, ni trop haut & Y haut, HAUT
      else if ((x >= 30 && x<=380) && y<=10) {
        if(window.location.href !=document.getElementById("topURL").innerHTML){
          window.location.replace(document.getElementById("topURL").innerHTML);
          console.log("SWIPE HAUT VERS: "+document.getElementById("topURL").innerHTML);
        }else{
          console.log("SWIPE HAUT MAIS MÊME URL");
        }
      }

    }
    model.renderPredictions(predictions, canvas, context, video);
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }

  });
}

// Load the model.
handTrack.load(modelParams).then(lmodel => {
  model = lmodel
});