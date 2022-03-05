# Getting Started
***
***
# What is JavaScript?:
* JavaScript is one of the most popular programming languages
* With JS you can build:
    * web and mobile apps
    * real time networking apps
    * command line tools
    * games
* JS code can run in....
  * in the browser - it originally was only able to run in the browser
    * every browser has a JS engine
    * chrome uses v8
    * firefox uses SpiderMonkey
  * Node
    * node is a runtime enviorment
    * its an embedded version of the chrome v8 runtime in a C++ program
    * this allows you to run the JS code outside of a browser
* JS vs ECMAScript?:
  * ECMAScript is just a specification (kinda like Pythons PEP8)
    * ES6 is the newer release of ECMAScript
  * JS is a programming language that conforms to that specification

***
***
# Setting up the dev enviorment
* VSCode is a popular option
* Download VSCode and Node
* Make an html file 
  * type "!" then click tab to generate a boiler plate
* install the "live server" vscode extension
  * you can then right click your html file and select "open with live server"
  * When you update the code the site auto refreshes

***
***
# JavaScript in browsers
* you need to add a script element to the html
* you can put it in the head section or at the end of the body section after all of the existing elements
  * it is best practice to put it in the body section (at the end after the existing elements)
  * the browser parses the html from top to bottom - so if its at the top the browser may get hung up on parsing and executing the JS
  * the script often also needs to talk to the elements on the webpage - so the elements need to render first
```
<script>
        // Comment
        console.log('Hello World');
</script>
```

***
***
# Seperation of Concerns
* you dont want your scripts to be inline like in the example above
* you should seperate your scripts from the html
```
<body>
    <h1>Hello World!</h1>
    <script src="index.js"></script>
</body>
```

***
***
# JS in Node
* open command prompt
* cd to the dir
* run the JS like this:
```
$ node index.js
```