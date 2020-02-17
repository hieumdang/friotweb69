
var sha1 = require('sha1');
var express = require('express')
var app = express()
var path = require('path');
//const express = require('express')
//const app = express()
const port = 3000
//app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + 'index.html')))
app.get('/about', (req,res) => res.send('about'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.get('*', function(req, res){
   res.status(404).send('what???'); 
 });
 function refreshData()
 {





  let ts2 = Date.now();

  var misha;
  let now = new Date(ts2);

  let minutes = now.getMinutes();
  let s = now.getSeconds();
  
  misha = sha1(parseInt(minutes));
  app.get('/' +misha, (req,res) => res.send(misha))
  console.log(misha);
  //console.log('app restarted');
     // Do your thing here
     console.log("App just restarted at " + minutes +" : " +s);
 //    setTimeout(refreshData, 20000);

  tusha = sha1(parseInt(minutes - 1));
  //Delete the previous
  app.delete('/' + tusha, function (req, res) {
    res.send('Got a DELETE request at /'+ tusha)
  })
 }

 setInterval(refreshData, 20000); 


 