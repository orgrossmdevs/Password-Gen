// Launcher Code; Do not modify! (or be a rebel and do so) 


// Big Thanks to Pyxel for this code below!
// Check him out on https://github.com/FalseData

// Forces NPM to require these
const express = require('express')
const app = express()
const opn = require('opn')


//Port app listens on
const port = 1070


// Loads /index.html
app.use(express.static(__dirname));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});

//Opens browser after initiation

opn('http://localhost:1070') // Change 1070 to the port that is being used on Ln. 11 (const port = numhere)


// Console Logging; ignore this!
console.log("---------------------")
console.info() // Spacer
console.log("Secure Password Generator 1.0 | Created by Ross & Intel ")
app.listen(port, () => console.log(`Listening on ${port}!`))
console.log("Press CONTROL + C to terminate session!")  // This should place after line 18, but appears before line 18 on line 17!
console.info()
console.log("This build has not been updated by the creator, please do so manually")
