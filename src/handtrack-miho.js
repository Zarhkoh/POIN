const video = document.getElementById("myvideo");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let updateNote = document.getElementById("updatenote");
let isVideo = false;
let model = null;

const modelParams = {
  flipHorizontal: true, // flip e.g for video  
  maxNumBoxes: 1, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.7, // confidence threshold for predictions.
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

      // Sy X est a droite & Y ni trop bas, ni trop haut, DROITE
      if (x >= 420 && (y >= 100 && y <= 150)) {
        if (window.location.href != document.getElementById("rightURL").innerHTML) {
          window.location.replace(document.getElementById("rightURL").innerHTML);
        }
      }

      // Sy X est a gauche & Y ni trop bas, ni trop haut, GAUCHE
      else if (x <= 20 && (y >= 100 && y <= 150)) {
        if (window.location.href != document.getElementById("leftURL").innerHTML) {
          window.location.replace(document.getElementById("leftURL").innerHTML);
        }
      }
      // Sy X est ni trop bas, ni trop haut & Y bas, BAS
      else if ((x >= 220 && x <= 300) && y >= 380) {
        if (window.location.href != document.getElementById("bottomURL").innerHTML) {
          window.location.replace(document.getElementById("bottomURL").innerHTML);
        }
      }
      // Sy X est ni trop bas, ni trop haut & Y haut, HAUT
      else if ((x >= 220 && x <= 300) && y <= 10) {
        if (window.location.href != document.getElementById("topURL").innerHTML) {
          window.location.replace(document.getElementById("topURL").innerHTML);
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
