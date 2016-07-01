/**
 * Created by nimesh on 7/1/16.
 */
var webpack=require("webpack");
var common={
    entry:'./index.js',
    output:{
        path:__dirname+'/dist',
        filename:'app.js'
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                test:/\.js?$/,
                loaders:['babel'],
                exclude: /node_modules/
            },
       ]
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true
    }
}

module.exports=common;
