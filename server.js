//Install express server
const express = require('express');

const app = express();

app.use(express.static(__dirname+'/dist/timezone-converter'));
app.get('/',function(req,res){
    res.sendFile('/timezone-converter/dist/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
