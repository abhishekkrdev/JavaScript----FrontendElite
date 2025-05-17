export default function setCancellableInterval(callback, delay, ...args) {
  const timerId = setInterval(callback, delay, ...args);
  
  return () => {
    clearInterval(timerId);
  };
}


export default function setCancellableTimeout(callback, delay, ...args) {
  const timeoutId = setTimeout(callback,delay,...args);

  return ()=>{
    clearTimeout(timeoutId);
  }
}