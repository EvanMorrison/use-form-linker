"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/use-form-linker.production.min.js");
} else {
  module.exports = require("./dist/use-form-linker.development.js");
}
