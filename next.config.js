const compose = require("next-compose");
const withPlugins = require("next-compose-plugins");
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
module.exports = withPlugins([], {
    images: {
        domains: [
            "images.unsplash.com",
            "blog-south-west-fishing.vercel.app",
            "www.google.com",
            "blog-south-west-fishing-q3ge3neug-jidayyy.vercel.app",
            "localhost",
            "www.slate.fr",
        ],
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ];
    },
});
