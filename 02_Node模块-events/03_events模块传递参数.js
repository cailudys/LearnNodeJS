// 拿到的是一个类
const EventEmitter = require("events");

// 创建EventEmitter的实例
const emitter = new EventEmitter();

function handleWhyFn(name, age, height) {
  console.log("执行why对应的事件:", name, age, height);
}

// 监听事件
emitter.on("why", handleWhyFn);

// 发射事件
setTimeout(() => {
  emitter.emit("why", "coderwhy", 18, 1.88);

  // 取消事件监听
  //   emitter.off("why", handleWhyFn);

  setTimeout(() => {
    emitter.emit("why");
  });
}, 2000);
