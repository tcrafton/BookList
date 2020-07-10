/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { books, authors, bookNotes, tagTypes } = mockData;
const data = JSON.stringify({ books, authors, bookNotes, tagTypes });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
