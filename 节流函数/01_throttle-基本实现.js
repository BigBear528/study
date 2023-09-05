const throttle = function (fn, interval) {
  // 记录上一次触发的时间，初始值为0
  let lastTime = 0;

  const _throttle = function (...args) {
    // 触发事件的当前时间
    const nowTime = new Date().getTime();

    // 计算剩余的时间  剩余时间 = 时间间隔 - (当前时间 - 上一次时间)
    let remainTime = interval - (nowTime - lastTime);

    // 判断剩余时间时候小于等于0，如果小于等于0着触发传入的事件
    if (remainTime < 0) {
      // 触发事件
      fn.apply(this, args);
      // 保存本次触发的时间
      lastTime = nowTime;
    }
  };

  return _throttle;
};
