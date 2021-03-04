export default function throttle (func, time) {
  var timeoutId = null
  return function (...args) {
    if( !timeoutId ){
      func(...args)
      timeoutId = setTimeout(() => {
        timeoutId = null
        func(...args)
      }, time)
    }
  }
}
