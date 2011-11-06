window.Notifier = {};
(function ($) {
  "use strict";

  var defined = function (obj) {
      return (typeof obj !== "undefined");
  };
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

  this.notify = function () {
    var options = {};
    if (typeof arguments[0] === "string") {
        options.message = arguments[0];
        if (typeof arguments[1] === "string") {
            options.title = arguments[1];
        }
        if (typeof arguments[2] === "string") {
            options.icon = arguments[2];
        }
        if (typeof arguments[3] === "number") {
            options.timeout = arguments[3];
        }
    } else {
        options = arguments[0];
    }
    var notification = $("<div>", {
        "class": "notification"
    });

    var timeout = options.timeout || this.config.defaultTimeout;

    if (defined(options.icon)) {
      $("<img>", {
        src: options.icon,
        "class": "notification-icon"
      }).appendTo(notification);
    }

    var textElement = $("<div>", {
        "class": "notification-text"
    }).appendTo(notification);

    if (defined(options.title)) {
      var title = $("<div>", {
        "class": "notification-title"
      }).appendTo(textElement);
      if (typeof options.message === "string") {
        title.text(options.title);
      } else {
        title.append(options.title);
      }
    }

    if (defined(options.message)) {
      var message = $("<div>", {
        "class": "notification-message"
      }).appendTo(textElement);
      if (typeof options.message === "string") {
        message.text(options.message);
      } else {
        message.append(options.message);
      }
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
    return function (opts) {
      if (typeof opts !== "object") {
          var args = $.extend(true, [], arguments);
          args[2] = this.config.icons[type];
          this.notify.apply(this, args);
      } else {
        var options = opts;
        options.icon = this.config.icons[type];
        this.notify(opts);
      }
    };
  };
  this.info = notifyFactory("info");
  this.warn = notifyFactory("warn");
  this.warning = this.warn;
  this.error = notifyFactory("error");
  this.success = notifyFactory("success");

}).call(window.Notifier, jQuery);
