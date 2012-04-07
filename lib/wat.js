document.addEventListener('DOMContentLoaded', function() {
  var playWat;

  playWat = function() {
    var randomNumber;

    randomNumber = Math.floor(Math.random() * 2) + 1;
    document.getElementById('wat-' + randomNumber).play();
  };

  chrome.browserAction.onClicked.addListener(playWat);
});
