// 拿到的是一个类
const EventEmitter = require("events");

// 创建EventEmitter的实例
const emitter = new EventEmitter();

// 监听事件
emitter.on("why", () => {
  console.log("执行why对应的事件");
});

// 发射事件
setTimeout(() => {
  emitter.emit("why");
}, 5000);
