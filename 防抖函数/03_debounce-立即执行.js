const debounce = function (fn, delay, immediate = false) {
  // 定义一个定时器，保存上一次的定时器
  let timer = null;
  // 定义一个变量，保存当前是否是第一次执行
  let isInvoke = false;

  // 返回的节流函数
  const _debounce = function (...args) {
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    } else {
      // 取消上一次的定时器
      if (timer) {
        clearTimeout(timer);
      }

      // 延时执行fn函数
      timer = setTimeout(() => {
        // 外部传入的函数
        fn.apply(this, args);
        isInvoke = false;
        timer = null;
      }, delay);
    }
  };

  return _debounce;
};
