const debounce = function (fn, delay, immediate = false, resultCallback) {
  let timer = null;
  let isInvoke = false;

  const _debounce = function (...args) {
    if (immediate && !isInvoke) {
      const result = fn.apply(this, args);
      if (resultCallback) {
        resultCallback(result);
      }
      isInvoke = true;
    } else {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        const result = fn.apply(this, args);
        if (resultCallback) {
          resultCallback(result);
        }
        isInvoke = false;
        timer = null;
      }, delay);
    }
  };

  _debounce.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      isInvoke = false;
      timer = null;
    }
  };

  return _debounce;
};
