$dom.onready( function() {
  new Parallax(document.getElementById('scene'));

  mixpanel.track("Page view");
});
