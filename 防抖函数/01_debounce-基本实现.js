const debounce = function (fn, delay) {
  // 定义一个定时器，保存上一次的定时器
  let timer = null;

  // 返回的节流函数
  const _debounce = function () {
    // 取消上一次的定时器
    if (timer) {
      clearTimeout(timer);
    }

    // 延时执行fn函数
    timer = setTimeout(() => {
      // 外部存入的函数
      fn();
    }, delay);
  };

  return _debounce;
};
