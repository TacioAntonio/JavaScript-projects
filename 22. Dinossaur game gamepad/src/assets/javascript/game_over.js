(() => {
    const points = document.querySelector('.points');
    points.innerHTML = `Pontos: ${localStorage.getItem('points')}`;

    const gamepads = {};
  
    function gamepadHandler(event, connected) {
      const gamepad = event.gamepad;
  
      if (connected) {
        gamepads[gamepad.index] = gamepad;
      } else {
        delete gamepads[gamepad.index];
      }
    }
    
    window.addEventListener("gamepadconnected", (e) => {
        gamepadHandler(e, true);
    }, false);
    
    window.addEventListener("gamepaddisconnected", (e) => {
        gamepadHandler(e, true);
    }, false);
    
    function updateGamepads() {
      const gamepads = navigator.getGamepads();
    
      for (let i = 0; i < gamepads.length; i++) {
        const gamepad = gamepads[i];
    
        if (gamepad) {
            if (gamepad.buttons[2].pressed) { // X
                window.location.href = "index.html";
            }
        }
      }
    }
    
    setInterval(updateGamepads, 100);
})()