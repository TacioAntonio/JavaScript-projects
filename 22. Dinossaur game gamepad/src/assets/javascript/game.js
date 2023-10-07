(() => {
  localStorage.setItem('points', 0);

  const player = document.querySelector(".player");
  const obstacle = document.querySelector(".obstacle");
  const points = document.querySelector(".points");
  let player_points = localStorage.getItem('points') || 0;
  let BLOCK_JUMP = false;
  // Player
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

    if (BLOCK_JUMP) return;
  
    for (let i = 0; i < gamepads.length; i++) {
      const gamepad = gamepads[i];
  
      if (gamepad) {
          if (gamepad.buttons[2].pressed) { // X
              player.style.rotate = "15deg";
              player.style.bottom = "25%";
              BLOCK_JUMP = true;

              setTimeout(() => {
                  player.style.bottom = "0";
                  player.style.rotate = "0deg";
              }, 1.2 * 1000);
          }
  
          // if (gamepad.buttons[9].pressed) { // START
          //   console.log("Botão 9 pressionado");
          //   localStorage.setItem('points', 0);
          //   window.location.reload();
          // }
      }
    }
  }
  
  setInterval(updateGamepads, 100);
  // Colisão
  function checkCollision() {
      const rect1 = player.getBoundingClientRect();
      const rect2 = obstacle.getBoundingClientRect();
  
      if (
          rect1.right > rect2.left &&
          rect1.left < rect2.right &&
          rect1.bottom > rect2.top &&
          rect1.top < rect2.bottom
      ) {
        player.classList.add('hidden');
        window.location.href = "game_over.html";
      }
  }
  
  setInterval(checkCollision, 100); 
  // Ponto
  obstacle.addEventListener('animationiteration', () => {
      localStorage.setItem('points', ++player_points);
      points.innerHTML = `Pontos: ${player_points}`;
      BLOCK_JUMP = false;
  });
})()