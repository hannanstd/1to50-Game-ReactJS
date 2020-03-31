module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve = {
        extensions: ['.js', '.jsx']
    };

    return config;
};
