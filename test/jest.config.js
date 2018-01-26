module.exports = {
  verbose: true,
  rootDir:'../',
   moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
      "\\.(css|less)$": "<rootDir>/test/__mocks__/styleMock.js" /*,
      "\\.hbs":"<rootDir>/test/__mocks__/styleMock.js" */
    },
    testPathIgnorePatterns:["/node_modules/"],
    transform: {
      "^.+\\.ts?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
      "^.+\\.hbs?$": "<rootDir>/test/__mocks__/preprocessor.hbs.js"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$",
    moduleFileExtensions: [
      "ts",
      "js",
      "json"
    ],
    moduleDirectories : ["node_modules"]
};
