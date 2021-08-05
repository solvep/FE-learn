var http = require("http");
var fs = require("fs");
var path = require("path");
//  www.w3cschool.cn
function send404(response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  // response.setHeader("Cache-Control", "max-age=31536000");
  response.write("Error 404: Resource not found.");
  response.end();
}

var mimeLookup = {
  ".js": "application/javascript",
  ".html": "text/html",
};

var server = http
  .createServer(function (req, res) {
    if (req.method == "GET") {
      var fileurl;
      if (req.url == "/") fileurl = "/index.html";
      else if (req.url == "/js") fileurl = "/index.js";
      else fileurl = req.url;
      var filepath = path.resolve("./public" + fileurl);

      var fileExt = path.extname(filepath);
      var mimeType = mimeLookup[fileExt];
      if (!mimeType) {
        send404(res);
        return;
      }
      fs.exists(filepath, function (exists) {
        if (!exists) {
          send404(res);
          return;
        }
        res.writeHead(200, {
          "content-type": mimeType,
          "Cache-Control": "max-age=20",
          expires: "Sun, 08 May 2022 01:53:22 GMT",
        });
        fs.createReadStream(filepath).pipe(res);
        console.log("filepath", filepath);
      });
    } else {
      send404(res);
    }
  })
  .listen(3000);

console.log("server running on port 3000");
