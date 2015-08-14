//var tracker;
//
//function init() {
//    //var tracker = initTracker("#example");
//    //tracking.track("#example .drone", tracker);
//    tracker = initTracker("#example");
//    tracking.track("#example .drone", tracker);
//    //droneConnection.streamImage(tracker, "#example .drone");
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
//    /*  context.font = '11px Arial';
//     context.fillStyle = "#fff";
//     context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
//     context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);*/
//}
//function writeRectangle (rect, element) {
//    $(element)
//        .append("<p>")
//        .append(rect.color + ": " + rect.width + "X" + rect.height)
//        .append(" @ " + rect.x + ":" + rect.y)
//}
//
//function initTracker(element) {
//    var tracker = new tracking.ColorTracker();
//    //TrackerUtils.startTrackingColors("#A94A45", "red",tracker);
//    //TrackerUtils.addTrackingColor("#5EA24E", "green", tracker);
//    //TrackerUtils.startTrackingColors(tracker);
//
//    TrackerUtils.addTrackingColor("#A94A45", "red", tracker);
//    TrackerUtils.addTrackingColor("#5EA24E", "green", tracker);
//    TrackerUtils.addTrackingColor("#CB7F84", "magenta", tracker);
//    TrackerUtils.startTrackingColors(tracker);
//
//    tracker.on('track', function(event) {
//        // console.log(event.data);
//        console.log("colors");
//        markColors(event.data,element);
//        //  decideDroneMovement(event.data);
//    });
//
//    return tracker;
//}
//window.addEventListener("load", init);
//
//
///*function decideDroneMovement(colors) {
// var move = {
// left: false,
// right: false
// };
// droneConnection.send(move);
// }*/

function init() {
    var tracker1 = initTracker("#example");
    console.log("tracker", tracker1);
    tracking.track("#example .drone", tracker1);
    console.log("tracking started");
}

function initTracker(element) {
    // Initialise a color tracker
    var tracker = new tracking.ColorTracker();
    console.log("new color tracker", tracker);

    // We only want rectangles that have each dimension no smaller than 20 pixels
    // tracker.setMinDimension(20);

    // The colors we're interested in
    TrackerUtils.addTrackingColor("#A94A45", "red", tracker);
    TrackerUtils.addTrackingColor("#5EA24E", "green", tracker);
    TrackerUtils.addTrackingColor("#CB7F84", "magenta", tracker);
    TrackerUtils.startTrackingColors(tracker);

    // Whenever there is a new color detected, mark them
    tracker.on('track', function(event) {
        markColors(event.data, element);
    });

    return tracker;
}


function markColors(colors, element) {
    // Remove previously drawn rectangles indicating detected colors
    // Get the drawing surface
    var canvas = $(element + ' .canvas').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, context.width, context.height);

    for (var i = 0; i < colors.length; i++) {
        drawRectangle(colors[i], context);
        writeRectangle(colors[i], element + " .output");
    }
}

// Draw an overlay marking the detected color rectangle
function drawRectangle(rect, context) {
    context.strokeStyle = rect.color;
    context.strokeRect(rect.x, rect.y, rect.width, rect.height);
}

// Write the information out in text
function writeRectangle(rect, element) {
    $(element)
        .append("<p>")
        .append(rect.color + ": " + rect.width + "X" + rect.height)
        .append(" @ " + rect.x + ":" + rect.y)
}

window.addEventListener("load", init);
