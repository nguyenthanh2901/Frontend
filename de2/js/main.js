function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("s");
  const obj1 = document.getElementById("m");
  const obj2 = document.getElementById("d");
  animateValue(obj,60,0,60000);
  animateValue(obj1,60,0,3600000);
  animateValue(obj2,60,0,86400000);
  setInterval(()=>{
      animateValue(obj,60,0,60000);
  },60000)
