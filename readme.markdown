Notifier.js
=====
Javascript library for Gnome / Growl type non-blocking notifications. Jquery required.

Download
=====
[Release 1](https://github.com/Srirangan/notifer.js/raw/master/releases/1/notifier.js.zip)

Usage Guide
=====

Include Jquery and Notifier.js
-----

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
    <script type="text/javascript" src="notifier.js"></script>

Trigger Notifications
-----

    Notifier.success('User registration successful')
    Notifier.success('It\'s a boy!', 'Congrats!')
    Notifier.info('You have been informed!')
    Notifier.info('Tomorrow is another day', 'Words of wisdom')
    Notifier.warning('I warn you Ceasar!')
    Notifier.warning('I warn you Ceasar!', 'Assassination Warning')
    Notifier.error('Something may be wrong..')
    Notifier.error('Something may be wrong..', 'Ummm..')
    Notifier.notify('Babe I\'m gonna leave you', 'Led Zeppelin', './icons/Music.png', 2000)
