const { createProxyMiddleware } = require('http-proxy-middleware');
// const url = `http://devppool.arsyun.com/`;
const url = `http://192.168.1.212/`;

module.exports = function(app) {
    app.use(
        createProxyMiddleware("/user/", {
            target: url,
            changeOrigin: true,
        })
    );
};