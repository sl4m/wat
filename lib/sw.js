(function() {
  let creating;

  async function setupOffscreenDocument(path) {
    const offscreenUrl = chrome.runtime.getURL(path);
    const existingContexts = await chrome.runtime.getContexts({
      contextTypes: ['OFFSCREEN_DOCUMENT'],
      documentUrls: [offscreenUrl]
    });

    if (existingContexts.length > 0) {
      return;
    }

    if (creating) {
      await creating;
    } else {
      creating = chrome.offscreen.createDocument({
        url: path,
        reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK],
        justification: 'Play wat audio snippets'
      });
      await creating;
      creating = null;
    }
  }

  chrome.action.onClicked.addListener(async () => {
    await setupOffscreenDocument('wat.html')

    chrome.runtime.sendMessage({type: 'play-audio'});
  });
}());
