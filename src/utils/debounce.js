export const debounce = (func, timeout) => {
  let timer;
  return function () {
    const funcCall = () => {
      func.apply(this, arguments)
    }
    clearTimeout(timer)

    timer = setTimeout(funcCall, timeout)
  };
}