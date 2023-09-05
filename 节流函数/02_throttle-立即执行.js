const throttle = function (fn, interval, options = { leading: true, trailing: false }) {
  // 记录上一次触发的时间，初始值为0
  let lastTime = 0;

  // 获取到传入的其他参数
  const { leading, trailing } = options;

  const _throttle = function (...args) {
    // 触发事件的当前时间
    const nowTime = new Date().getTime();

    // 判断是否立即执行，不立即执行则将当前时间赋值作为上次触发时间的初始值
    if (!leading && !lastTime) {
      lastTime = nowTime;
    }

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
