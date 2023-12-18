chrome.runtime.onMessage.addListener(async (message) => {
  if (message.type == "play-audio") {
    var number,
        audio;

    number = Math.floor(Math.random() * 2) + 1;
    audio = new Audio();
    audio.setAttribute('src', 'audio/wat-' + number + '.ogg');
    audio.play();
  }
});
