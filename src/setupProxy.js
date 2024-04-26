const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3800', // Replace with the actual API server URL
      changeOrigin: true,
    })
  );
};
