$dom.onready( function() {
  new Parallax(document.getElementById('scene'));

  if(document.URL.match(/miomrk\.com/)) {
    mixpanel.track("Page view");

    var storeIds = [
      'spotify', 'itunes', 'amazon','japanese_amazon',
      'google_play', 'deezer', 'rdio'
    ];

    for(var i = 0; i < storeIds.length; i++) {
      mixpanel.track_links("#" + storeIds[i], "Clicked " + storeIds[i]);
    }
  }
});
