const fs = require("fs");
setTimeout(() => {
  // 新的事件循环的起点;
  // sleep(1000);

  setImmediate(() => {
    console.log("setImmediate 2");
  });
  Promise.resolve().then(() => {
    console.log("poll callback2");
  });
  console.log("1");
  setTimeout(() => {
    // 新的事件循环的起点
    console.log("100");
  }, 0);
}, 0);

setImmediate(() => {
  console.log("setImmediate 1");
});
// / 将会在 poll 阶段执行
fs.readFile("./config/12.conf", { encoding: "utf-8" }, (err, data) => {
  if (err) throw err;
  console.log("read file success");
});

setTimeout(() => {
  console.log("11");
}, 0);
/// 该部分将会在首次事件循环中执行
Promise.resolve().then(() => {
  console.log("poll callback");
});
process.nextTick(() => {
  console.log("nextTick");
});
// 首次事件循环执行
console.log("2");

function sleep(n) {
  var start = new Date().getTime();
  while (true) {
    if (new Date().getTime() - start > n) {
      // 使用  break  实现；
      break;
    }
  }
}
