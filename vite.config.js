import path from 'path';
const proxyUrl = "https://www.huiman.top";
// const proxyUrl = 'http://localhost:6200';

module.exports = {
  port: 9527,
  open: true,
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  proxy: {
    "/api": {
      target: proxyUrl,
      changeOrigin: true,
    },
  }
};