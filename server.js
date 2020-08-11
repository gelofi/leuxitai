const http = require('http');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  console.log(
    Date.now() + ' ping received! Visited hosting. Up for extra 30 min!'
  );
  response.sendFile(__dirname + '/host/hosting.html');
});
function keepAlive(){
  app.listen(3000, () => console.log('Server is Ready!'));
}

setInterval(() => {
  http.get(`http://unconsciousroyalbluephysics--fixukazutro.repl.co/`);
}, 280000);

module.exports = keepAlive