var Cylon = require('cylon');
var bot;
//var utils = require('./utils/droneUtils.js');

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .device("nav", {
        driver: "ardrone-nav",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot
function fly(robot) {
    bot = robot;
    bot.drone.config('general:navdata_demo', 'TRUE');



    bot.nav.on("navdata", function(data) {
        // console.log(data);
    });

    bot.nav.on("altitudeChange", function(data) {
        console.log("Altitude:", data);
        // Drone is higher than 1.5 meters up
        if (bot.drone.altitude > 1.5) {
            bot.drone.land();
        }
    });


    bot.nav.on("batteryChange", function(data) {
        console.log("Battery level:", data);
    });

    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();



    after(10*1000, function() {
        bot.drone.forward(0.3);
    });

    after (15*1000, function() {
        bot.drone.forward(0);
        bot.drone.back(0.3);
    });
    after (20*1000, function() {
        bot.drone.back(0);
        bot.drone.left(0.3)
    });
    after(25*1000, function() {
        bot.drone.left(0);
        bot.drone.land();
    });

    after(27*1000, function() {
        bot.drone.stop();
    });


}

Cylon.start();
