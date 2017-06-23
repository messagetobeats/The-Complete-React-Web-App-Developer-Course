var path = require('path');

module.exports =
{
    entry: './public/app.jsx',
    output: { path:__dirname, filename:'./public/bundle.js' },
    resolve: {
                alias:
                {
                  Greeter: path.resolve(__dirname, 'public/components/Greeter.js'),
                  GreeterMessage: path.resolve(__dirname, 'public/components/GreeterMessage.js'),
                  GreeterForm: path.resolve(__dirname, 'public/components/GreeterForm.js')
                },

                extensions: ['.js', '.jsx']
             },

    module:
    {
        loaders:[{

            loader:'babel-loader',

            query:{

              presets: ['react', 'es2015']
            },

            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]

    }
}
