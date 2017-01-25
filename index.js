const server = require('./src/server/server');
const config = require('./config.json');

server.listen(config.port);
