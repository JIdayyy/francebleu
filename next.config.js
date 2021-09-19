const compose = require("next-compose");

module.exports = compose([
    {
        webpack(config) {
            config.module.rules.push({
                test: /\.mp4$/,
                use: {
                    loader: "file-loader",
                },
            });
            return config;
        },
    },
]);
