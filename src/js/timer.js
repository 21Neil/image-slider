const timer = (() => {
  let timerObj = null

  const start = (fn, t) => {
    timerObj = setInterval(fn, t)
  }

  const stop = () => {
    clearInterval(timerObj)
  }

  const reset = (fn, t) => {
    stop()
    start(fn, t)
  }

  return { start, stop, reset }
})()

export default timer