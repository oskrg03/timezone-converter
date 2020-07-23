//Install express server
import express, { static } from 'express';
import path from 'path';

const app = express();

app.use(static(__dirname+'/dist/timezone-converter'));
app.get('/',function(req,res){
    res.sendFile('/timezone-converter/dist/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
