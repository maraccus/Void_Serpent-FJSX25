let lastTime = 0;   // Timestamp of previous frame
let loopTest = 0;   // Test variable to verify loop is running  

// Game variables
function create() {
    console.log("Game initialized!");
}

// GAME LOGIC goes here
function update(dt) {
    loopTest += 1;
    console.log("Frame: " + loopTest);
}

// DRAWING LOGIC goes here
function draw() {

}

// // // // // // // // // // // // // // // // // // 
// Main gameplay loop
function gameLoop(timestamp) {
    // Calculate delta time to keep updates consistent
    let dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    update(dt);
    draw();

    requestAnimationFrame(gameLoop);
}

// Start gameplay loop and initialize game
create();
requestAnimationFrame(gameLoop);