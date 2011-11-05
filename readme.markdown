Notifier.js
=====
Javascript library for Gnome / Growl type non-blocking notifications. Jquery required.

*The master branch is usually unstable. Use the downloadable archive for production. Hack away, experiment on the master branch. *

Links
=====
* [Demo](http://opensource.srirangan.net/notifier.js/)
* [Download](https://github.com/downloads/Srirangan/notifer.js/notifier.js.zip)

Usage Guide
=====

Include Jquery and Notifier.js
-----

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
    <script type="text/javascript" src="notifier.js"></script>

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
