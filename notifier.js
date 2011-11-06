window.Notifier = {};
(function ($) {
  "use strict";

  this.config = {
    defaultTimeout: 7500,
    icons: {
       info: "images/info.png",
       warn: "images/warn.png",
       error: "images/error.png",
       success: "images/success.png"
    }
  };
  var self = this;

  $(document).ready(function () {
    self.container = $("<div>", {
        id: "notifications"
    }).prependTo("body");
  });

  this.notify = function (options) {
    var notification = $("<div>", {
        "class": "notification"
    });

    var timeout = options.timeout || this.config.defaultTimeout;

    if (options.icon) {
      $("<img>", {
        src: options.icon,
        "class": "notification-icon"
      }).appendTo(notification);
    }

    var textElement = $("<div>", {
        "class": "notification-text"
    }).appendTo(notification);

    if (options.title) {
      $("<div>", {
        "class": "notification-title"
      }).text(options.title).appendTo(textElement);
    }

    if (options.message) {
      $("<div>", {
        "class": "notification-message"
      }).text(options.message).appendTo(textElement);
    }

    notification
        .click(function () {
          notification.fadeOut();
        })
        .prependTo(this.container)
        .delay(timeout)
        .fadeOut();
  };

  var notifyFactory = function (type) {
    return function (message, title) {
      this.notify(message, title, this.config.icons[type]);
    };
  };
  this.info = notifyFactory("info");
  this.warn = notifyFactory("warning");
  this.warning = this.warn;
  this.error = notifyFactory("error");
  this.success = notifyFactory("success");

}).call(window.Notifier, jQuery);
