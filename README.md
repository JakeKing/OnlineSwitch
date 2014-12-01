OnlineSwitch
============

A simple python / NodeJS based 110/240v relay switching server for the Raspberry Pi.


So I wanted a nice simple way of controlling the GPIO pins on my RPi. I chose to use Minibian for the OS since I wanted the Pi to boot quickly, run in a low footprint of ram and on a small SD card.

I used Minibian for the OS - http://minibianpi.wordpress.com/

Things you'll need:

  1. Python
  2. NodeJs
  3. Relay Board - I used something like this http://www.sainsmart.com/arduino-pro-mini.html
  4. RaspberryPi running Minibian/Raspbian (it will most likeley work on everything, but I've only tested on these os's)

Setup and use:

  - Install Python & NodeJs
  - Plug in your relay - Pin 17 on the Rpi for the relay trigger. I then used the 5v pin to power the relay.
  - Download OnlineSwitch.js & gpio-on.py and gpio-off.py (same directoy)
  - Run OnlineSwitch.js with Node: nodejs OnlineSwitch.js
  - send a POST request to the node server on the port 1280 to turn the relay on: curl -d "on" 192.168.x.x:1280
  - send a POST request to the node server on the port 1280 to turn the relay off: curl -d "off" 192.168.x.x:1280
  - You can now build a simple interface in html to send the requests.
  

Enjoy!
