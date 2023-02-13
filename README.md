# Welcome to My First Backend
***

## Task
[Problem]  
Create a backend app with light web framework using express (for javascript)
You don't need to create a database, just store the information hard coded inside your file.
[Challenges]  
1)  
It will have a route GET on /. This action will give randomly (in a pool of at least 20) a name of a song from Frank Sinatra  
2)  
multiple pages/routes  
- GET on /. This action will give randomly (in a pool of at least 20) a name of a song from Frank Sinatra.  
    song list resource https://en.wikipedia.org/wiki/List_of_songs_recorded_by_Frank_Sinatra
- GET on /birth_date. This action will give Frank Sinatra birth date.
- GET on /birth_city. This action will give Frank Sinatra birth city.
- GET on /wives. This action will give all the name of Frank Sinatra wife.
    Format: wife1, wife2, wife3, wife4A
- GET on /picture. This action will redirect to Frank Sinatra's picture.
    image file link https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg
3)  
    2 more pages/routes  
- GET on /public. This action will print "Everybody can see this page"
- GET on /protected. This action will be protected by a HTTP Basic access authentication 
    and print "Welcome, authenticated client" if you are authorized with the login admin 
    and password admin otherwise it will provide a 401 Not authorized.

## Description
I solved the problem to this project by installing express.js and basic-auth. Express.js handles the web framework which servers as the web server. Basic-auth handles the authorization for the username and password for the credentials for the '/protected' webpage for this project as well as the 401 error.

## Installation
resource links:  
node.js - https://nodejs.org/en/download/  
express.js - https://expressjs.com/en/starter/installing.html  
basic-auth - https://github.com/jshttp/basic-auth  

node - to run javascript locally  
express.js - to run the web framework for a local server  
basic-auth - for basic authorization  

To install:
1) Install node  
If using homebrew, please  
    brew install node  
-please install node first, npm is included with the node.js installation  
-update npm to the most up to date version (at this time, it should be 8.18.0)  

2) Install express, basic-auth  
    npm install express basic-auth  
## Usage
```
To run server
    node app.js
```

``` 
To shut the server down
    press Ctrl + C after server has started
```

To access the webpage, please use
    https://web-r7df372c3-f06d.docode.us.qwasar.io/

If the web server does not run, please change the port number as needed.

--- instructions from qwasar ---  
Your server will be accessible at this URL:  
XXXXXXXXX is your docode ID  
http://web-XXXXXXXXX.docode.YYYY.qwasar.io  
(tip: add "web-" in front of docode link to run project in browser)  

### The Core Team
Warren F  

<span><i>Made at <a href='https://qwasar.io'>Qwasar Silicon Valley</a></i></span>
<span><img alt='Qwasar Silicon Valley Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px'></span>
