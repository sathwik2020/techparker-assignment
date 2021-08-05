class Templates {
  // templates;
  // Load templates from file
  constructor() {
    this.templates = this.readJSONFile((err, data) => {
      if (err) {
        console.log("Data not loaded: \n " + err);
      } else {
        this.templates = data;
      }
    });
  }

  // read jason data
  readJSONFile(callback) {
    let fs = require("fs");
    let file = __dirname + "/../assets/data/templates.json";
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        return callback(err);
      } else {
        return callback(undefined, JSON.parse(data));
      }
    });
  }

  // send all templates
  getTemplates(callback) {
    if (this.templates == undefined) {
      return callback("Sorry, there is no data.");
    } else {
      return callback(undefined, this.templates);
    }
  }
}
module.exports = { Templates };
