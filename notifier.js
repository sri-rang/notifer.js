$(document).ready(function() {
  $("body").append("<div id='notificationsContainer'></div>");
});

function escapeHtml(string) { return string.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

var Notifier = {};

Notifier.notify = function(message, title, iconUrl, timeOut) {
  var id = "notif-" + new Date().getTime(), notificationHtml = "";
  notificationHtml += "<div id='" + id + "' class='notification' onclick='$(this).fadeOut()'>";
  if (iconUrl) notificationHtml += "<img class='icon' src='" + escapeHtml(iconUrl) + "'/>";
  notificationHtml += "<div class='text'>";
  if (title) notificationHtml += "<div class='title'>" + escapeHtml(title) + "</div>";
  if (message) notificationHtml += "<div class='message'>" + escapeHtml(message) + "</div>";
  notificationHtml += "</div>";
  notificationHtml += "</div>";
  $("#notificationsContainer").prepend(notificationHtml);
  setTimeout("$('#" + id + "').fadeOut()", timeOut);
};

Notifier.info = function(message, title) {Notifier.notify(message, title, "./icons/Info.png", 5000);};
Notifier.warning = function(message, title) {Notifier.notify(message, title, "./icons/Alert.png", 5000);};
Notifier.error = function(message, title) {Notifier.notify(message, title, "./icons/Close.png", 5000);};
Notifier.success = function(message, title) {Notifier.notify(message, title, "./icons/Check.png", 5000);};