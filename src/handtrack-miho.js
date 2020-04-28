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

function testconsole() {
  console.log('lolo');
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
      console.log("Predictions: ", predictions[0].bbox[0]);
      myDiv.style.position = "absolute";
      myDiv.style.left = (predictions[0].bbox[0] * 3) + 'px';
      myDiv.style.top = (predictions[0].bbox[1] * 6) + 'px';

      if (predictions[0].bbox[0] >= 350) {
        window.location.replace(document.getElementById("test").innerHTML);
        console.log(document.getElementById("test").innerHTML);
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