chrome.browserAction.onClicked.addListener(function() {
  var number,
      audio;

  number = Math.floor(Math.random() * 2) + 1;
  audio = new Audio();
  audio.setAttribute('src', 'audio/wat-' + number + '.ogg');
  audio.play();
});
