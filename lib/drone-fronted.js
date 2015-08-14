function init() {
    var tracker = initTracker("#example");
    tracking.track("#example .drone", tracker);

}


function markColors(colors, element) {
    // Do the marking
    var canvas = $(element + ' .canvas').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, context.width, context.height);
    for (var i = 0; i < colors.length; i++) {
        drawRectangle(colors[i], context);
    }
}
function drawRectangle(rect, context) {
    context.strokeStyle = rect.color;
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
}


function initTracker(element) {
    var tracker = new tracking.ColorTracker();
    TrackerUtils.startTrackingColors(tracker);

    tracker.on('track', function(event) {
       // console.log(event.data);
        console.log("colors");
        markColors(event.data,element);

    });

    return tracker;
}





window.addEventListener("load", init);