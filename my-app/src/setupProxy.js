const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api', {
          target: 'https://api.unsplash.com',
          changeOrigin: true,
          pathRewrite:{
              '^/api/':'/'
          }
        })
    );
    app.use(
        createProxyMiddleware('/naverMap', {
          target: 'https://naveropenapi.apigw.ntruss.com',
          changeOrigin: true,
          pathRewrite:{
              '^/naverMap/':'/'
          }
        })
    );
};