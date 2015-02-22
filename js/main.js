$dom.onready( function() {
  new Parallax(document.getElementById('scene'));

  if(document.URL.match(/miomrk\.com/)) {
    mixpanel.track("Page view");

    var storeIds = [
      'spotify', 'itunes', 'amazon', 'japanese_amazon',
      'google_play', 'deezer', 'rdio', 'japanese_itunes'
    ];

    for(var i = 0; i < storeIds.length; i++) {
      mixpanel.track_links("#" + storeIds[i], "Clicked " + storeIds[i]);
    }

    var trackIds = [
      'tripppp', 'waiting_white'
    ];

    var events = [
      SC.Widget.Events.PLAY,
      SC.Widget.Events.PAUSE,
      SC.Widget.Events.FINISH,
      SC.Widget.Events.SEEK
    ];

    var getTrackingFunctionFor = function(event, trackId) {
      return function() {
        mixpanel.track("Track " + event, {track: trackId});
      }
    }

    for(var i = 0; i < trackIds.length; i++) {
      var widget = SC.Widget(trackIds[i]);

      for(var j = 0; j < events.length; j++) {
        widget.bind(events[j], getTrackingFunctionFor(events[j], trackIds[i]));
      }
    }
  }
});
