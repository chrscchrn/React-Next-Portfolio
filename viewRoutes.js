module.exports = (server, app) => {
  server.get('/about/', (req, res) => {
    app.render(req, res, '/about');
  });

  server.get('/about/:page', (req, res) => {
    app.render(req, res, '/about');
  });

  server.get('/about', (req, res) => {
    app.render(req, res, '/about');
  });

  server.get('/contact/', (req, res) => {
    app.render(req, res, '/contact');
  });

  server.get('/contact/:page', (req, res) => {
    app.render(req, res, '/contact');
  });

  server.get('/contact', (req, res) => {
    app.render(req, res, '/contact');
  });
};