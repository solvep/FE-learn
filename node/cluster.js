const cluster = require("cluster");

const instances = 2;
console.log("isMaster: ", cluster.isMaster);
if (cluster.isMaster) {
  for (let i = 0; i < instances; i++) {
    cluster.fork();
  }
} else {
  require("./app.js");
}
