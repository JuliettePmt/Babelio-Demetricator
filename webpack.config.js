const path = require("path");

module.exports = {
    mode: "production",
    entry: "./content.js",
    output: {
        filename: "content.bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
