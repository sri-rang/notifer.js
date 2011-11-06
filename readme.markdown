Notifier.js
=====
JavaScript library for Gnome / Growl type non-blocking notifications. jQuery required.

Links
=====
* [Demo](http://opensource.srirangan.net/notifier.js/)
* [GitHub](https://github.com/Srirangan/notifer.js)
* [Download](https://github.com/downloads/Srirangan/notifer.js/notifier.js.zip)

Usage Guide
=====

The master branch may be unstable from time to time. Use the downloadable archive for production.

Hack away, experiment on the master branch. Feel free to clone, fork and send pull requests.

Trigger Notifications
-----

    // Success notifs
    Notifier.success('User registration successful')
    Notifier.success('It\'s a boy!', 'Congrats!')

    // Info notifs
    Notifier.info('You have been informed!')
    Notifier.info('Tomorrow is another day', 'Words of wisdom')

    // Warning notifs
    Notifier.warning('I warn you Ceasar!')
    Notifier.warning('I warn you Ceasar!', 'Assassination Warning')

    // Error notifs
    Notifier.error('Something may be wrong..')
    Notifier.error('Something may be wrong..', 'Ummm..')

    // Notif with custom icon and timeout
    Notifier.notify('Babe I\'m gonna leave you', 'Led Zeppelin', './icons/Music.png', 2000)

    // HTMLs are escaped, XSS attempts are blunted
    Notifier.error('<script>alert(\'xss attempt blunted\')</script>')

Configure
-----

  Default behavior of NotifierJS can be modified without having to muddle through the code.

  Here's an example of reducing the default timeout:

    <script>
      Notifier.config.defaultTimeout = 250;
    </script>
