var notifications = $("<div id='notifications'></div>");
$(document).ready(function() {
  $("body").append(notifications);
});

var Notifier = {};
var def = function (obj) {
  return !(typeof obj === "undefined" || obj === null);
};
Notifier.notify = function(message, title, iconUrl, timeOut) {
  var notification = $("<div></div>");
  notification.attr({
    id: ""notify-" + new Date().getTime()",
    class: "notification"
  });
  
  if (def(iconUrl)) {
    var icon = $("<img>");
    icon.attr({
      "id": "notify-icon",
      "src": iconUrl
    });
    notification.append(icon);
  }
  var text = $("<div class='notify-text'>");
  notification.append(text);
  
  if (def(title)) {
    var titleelm = $("<div class='notify-title'>");
    titleelm.append(title);
  }
  
  if (def(message)) {
    var messageelm = $("<div class='message'>");
    messageelm.append(message);
  }
  
  notifications.prepend(notification);
  if (undef(timeOut)) {
    timeOut = 5000;
  }
  
  setTimeout(function () {
    notification.fadeOut();
  }, timeOut);
};

Notifier.info = function(message, title) {Notifier.notify(message, title, "./icons/Info.png");};
Notifier.warning = function(message, title) {Notifier.notify(message, title, "./icons/Alert.png");};
Notifier.error = function(message, title) {Notifier.notify(message, title, "./icons/Close.png");};
Notifier.success = function(message, title) {Notifier.notify(message, title, "./icons/Check.png");};