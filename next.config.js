/** @type {import('next').NextConfig} */

const config = require("./config");
const nextConfig = {
    env: {
        BASE_URL: config.BASE_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "agency.teamrabbil.com",
            },
        ],
    },
};

module.exports = nextConfig;
