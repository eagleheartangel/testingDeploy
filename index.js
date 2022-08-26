var http = require('http');

iniciar();

function iniciar() {
  function onRequest(_, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hola Mundo con NodeJS');
    response.end();
  }
  const port = process.env.PORT || 9000;
  http.createServer(onRequest).listen(port);
  console.log('database connected on port', port);
}
