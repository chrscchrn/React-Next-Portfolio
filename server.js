const next = require('next');
const express = require('express');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const server = express();

const viewRoutes = require('./viewRoutes');
server.use(express.static('public'));

app.prepare().then(() => {
  viewRoutes(server, app);

  server.get('*', (req, res) => {
    app.render(req, res, '/');
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(' Next.js "server" ready on port', PORT);
  });
}).catch((ex) => {
  console.error(ex.stack); // eslint-disable-line no-console
  process.exit(1);
});


module.exports = app;