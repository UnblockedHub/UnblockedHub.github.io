chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('snake.html', {
    'outerBounds': {
      'width': 1100,
      'height': 800
    },
    "frame": {color: "#161616"},
  "resizable": true,
  });
});