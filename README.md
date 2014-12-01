OnlineSwitch
============

A simple python / NodeJS based 110/240v relay switching server for the Raspberry Pi.


So I wanted a nice simple way of controlling the GPIO pins on my RPi. I chose to use Minibian for the OS since I wanted the Pi to boot quickly, run in a low footprint of ram and on a small SD card.

I used Minibian for the OS - http://minibianpi.wordpress.com/

Things you'll need:

  1. Python & python-rpi.gpio
  2. NodeJs
  3. Relay Board - I used something like this http://www.sainsmart.com/arduino-pro-mini.html
  4. RaspberryPi running Minibian/Raspbian (it will most likeley work on everything, but I've only tested on these os's)

Setup and use:

  - Install Python & NodeJs
  ```
      $sudo apt-get update
      $sudo apt-get install python-dev
      $sudo apt-get install python-rpi.gpio
      $sudo apt-get install nodejs
      $sudo apt-get install npm
  ```

  - Plug in your relay - Pin 17 on the Rpi for the relay trigger. I then used the 5v pin to power the relay.
  - Download OnlineSwitch.js & gpio-on.py and gpio-off.py (same directoy)
  - Run OnlineSwitch.js with Node:
  
  ```
      $nodejs OnlineSwitch.js
  ```
  - send a POST request to the node server on the port 1280 to turn the relay on:
  
  ``` 
      $curl -d "on" 192.168.x.x:1280
  ```
  - send a POST request to the node server on the port 1280 to turn the relay off:
  
  ```
      $curl -d "off" 192.168.x.x:1280
  ```
  - You can adjust the port that the server listens on by changing the ```.listen(1280)``` specification in the OnlineSwitch.js script.
  
  - You can now build a simple interface in html to send the requests, or alternativley script actions remote via the curl commands.

  - Next steps:
      - Add args on the python script to change both the GPIO pin and the state
      - Add requests to query the status of any GPIO pin in use via the same simple post/get request
      - Build a simple front-end for the controller in ExpressJs.
      - Add some authentication or IP whitelisting for devices that will be on the public internet.

