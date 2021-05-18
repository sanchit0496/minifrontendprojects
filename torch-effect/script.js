function moveTorch(event){
    var torch = document.getElementsByClassName("torch")[0];
    torch.style.clipPath = `circle(80px at ${event.offsetX}px ${event.offsetY}px)`;
  }
  
  
  
  