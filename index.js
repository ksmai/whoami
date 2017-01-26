const server = require('./src/server/server');
const config = require('./config.json');

server.listen(process.env.PORT || config.port);
