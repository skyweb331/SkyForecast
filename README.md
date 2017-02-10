Welcome to skyforecast!
===================
skyforecast combines data from google maps, google places, and Forecast.io api to allow users to see the weather anywhere

----------
<i class="icon-cog"></i>Installation
-------------

#### 1. Clone project
```bash
$ git clone https://github.com/skyweb331/skyforecast.git
```
#### 2. Config

> - Create **server/config.js** file identical to **server/example.config.js**
> - Set proper variables in **config.js**

----------
<i class="icon-pencil"></i> Running
-------------
First install node modules.
```
npm install
```
After successful installation, just make it run
```
npm start
```
Then, open a browser and change the port number before you visit:
```
http://localhost:3000
```
----------
<i class="icon-pencil"></i> Testing
-------------
You have to run server by above instruction. After run node server, you can run unit test by 
```
npm test
```
