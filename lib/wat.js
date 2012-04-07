document.addEventListener('DOMContentLoaded', function() {
  var playWat;

  playWat = function() {
    document.getElementById('wat-1').play();
  };

  chrome.browserAction.onClicked.addListener(playWat);
});
