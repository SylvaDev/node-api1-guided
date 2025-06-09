// import the server and start it!
const server = require('./api/server');

server.listen(9000, () => {
    console.log('Server is starting...');
  console.log('Server is listening on http://localhost:9000');
});