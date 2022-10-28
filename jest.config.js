module.exports = {
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
  };