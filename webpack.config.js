module.exports = {
    devtool: "source-map", //配置生成 Source Maps 的选项
    entry: __dirname + "/app/main.js", //入口文件路径   __dirname 是 node.js 中的一个全局变量，它指向当前 js 文件所在的目录.
    output: {
        path: __dirname + "/public/", //存放打包后文件的地方路径
        filename: "app.js" //打包后的文件名
    },
    devServer: {
        contentBase: "./public", //默认 webpack-dev-server 会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"文件夹下）.
        port: "9000",  //设置默认监听端口，如果省略，默认为"8080".
        inline: true, //设置为 true，当源文件改变时会自动刷新页面.
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于 HTML5 history API，如果设置为 true，所有的跳转将指向 index.html.
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json-loader"
        },{
            test: /\.js$/,
            exclude: /node_modules/, //编译打包时需要排除 node_modules 文件夹
            loader: "babel-loader"
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules!postcss-loader' //跟前面相比就在后面加上了 !postcss-loader
        }]
    }
}