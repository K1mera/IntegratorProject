const http = require('http');
const characters = require('./utils/data')
const PORT = 3001;

const server = http.createServer( function( req, res ) {
    res.setHeader('Access-Control-Allow-Origin', '*');

  
  if (req.url.includes('/rickandmorty/character')) {
    // Obtiene el ID del personaje de la URL
    let id = req.url.split('/').pop();

   
    var foundCharacter = characters.find(( character ) => character.id === parseInt(id));
    if (foundCharacter) {
        res.writeHead(200, { 'Content-Type':'application/json'});
        res.end( JSON.stringify( foundCharacter )
        );
    } else {
    res.writeHead(200, { 'Content-Type':'text/plain' })
    res.end( 'nothing' )
  }
}
});

server.listen( PORT, () => {
    console.log(`listening on server ${ PORT }`);
});