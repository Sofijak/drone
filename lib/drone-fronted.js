//var tracker;
//
//function init() {
//    //var tracker = initTracker("#example");
//    //tracking.track("#example .drone", tracker);
//    tracker = initTracker("#droneView");
//    droneConnection.streamImage(tracker, "#droneView .drone");
//}
//
//
//function markColors(colors, element) {
//    // Do the marking
//    var canvas = $(element + ' .canvas').get(0);
//    var context = canvas.getContext('2d');
//    context.clearRect(0, 0, context.width, context.height);
//    $(element + " .output").empty();
//    for (var i = 0; i < colors.length; i++) {
//        drawRectangle(colors[i], context);
//        writeRectangle(colors[i], element + " .output");
//    }
//}
//function drawRectangle(rect, context) {
//    context.strokeStyle = rect.color;
//    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
//  /*  context.font = '11px Arial';
//    context.fillStyle = "#fff";
//    context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
//    context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);*/
//}
//function writeRectangle (rect, element) {
//    $(element)
//        .append("&lt;p&gt;")
//        .append(rect.color + ": " + rect.width + "X" + rect.height)
//        .append(" @ " + rect.x + ":" + rect.y)
//}
//
//function initTracker(element) {
//    var tracker = new tracking.ColorTracker();
//    TrackerUtils.startTrackingColors("#A94A45", "red",tracker);
//    TrackerUtils.addTrackingColor("#5EA24E", "green", tracker);
//    TrackerUtils.startTrackingColors(tracker);
//    tracker.on('track', function(event) {
//       // console.log(event.data);
//        console.log("colors");
//        markColors(event.data,element);
//      //  decideDroneMovement(event.data);
//    });
//
//    return tracker;
//}
//window.addEventListener("load", init);
//
//
///*function decideDroneMovement(colors) {
//    var move = {
//        left: false,
//        right: false
//    };
//    droneConnection.send(move);
//}*/