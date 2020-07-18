//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/timezone-converter/dist'));
app.get('/',function(req,res){
    res.sendFile('./timezone-converter/dist/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 80);
