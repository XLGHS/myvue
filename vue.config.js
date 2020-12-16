module.exports = {
    publicPath: "./",
    devServer: {
        host: "localhost",
        port: "3000",
        open: true,
        proxy: {
            "/api": {
                target: "https://x.dscmall.cn/api",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}