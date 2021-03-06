module.exports={
    entry: "./index.js",
    output: {
        path: __dirname+"/dist/assets",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options :{
                    presets:['env','stage-0','react']
                }
            }
        ]
    }
};