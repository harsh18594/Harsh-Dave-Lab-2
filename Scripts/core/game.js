/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var percentLoaded;
// Game Scenes
var menu;
var slotMachine;
var gameOver;
var assetData = [
    { id: "WelCome", src: "../../Assets/images/WelCome.png" },
    { id: "PlayGameButton", src: "../../Assets/images/PlayGame.png" },
    { id: "Quit", src: "../../Assets/images/Quit.png" },
    { id: "Reset", src: "../../Assets/images/Reset.png" },
    { id: "SlotMachine", src: "../../Assets/images/SlotMachine.png" },
    { id: "Bet1Button", src: "../../Assets/images/Bet1Button.png" },
    { id: "Bet10Button", src: "../../Assets/images/Bet10Button.png" },
    { id: "Bet100Button", src: "../../Assets/images/Bet100Button.png" },
    { id: "SpinButton", src: "../../Assets/images/SpinButton.png" },
    { id: "Blank", src: "../../Assets/images/blank.png" },
    { id: "Banana", src: "../../Assets/images/banana.png" },
    { id: "Bar", src: "../../Assets/images/bar.png" },
    { id: "Bell", src: "../../Assets/images/bell.png" },
    { id: "Cherry", src: "../../Assets/images/cherry.png" },
    { id: "Grape", src: "../../Assets/images/grape.png" },
    { id: "Orange", src: "../../Assets/images/orange.png" },
    { id: "Seven", src: "../../Assets/images/seven.png" },
    { id: "Ok", src: "../../Assets/images/Ok.png" },
    { id: "Close", src: "../../Assets/images/Close.png" },
    { id: "Cancel", src: "../../Assets/images/Cancel.png" },
    { id: "RanOutMoney", src: "../../Assets/images/RanOutMoney.png" },
    { id: "NotEnoughMoney", src: "../../Assets/images/NotEnoughMoney.png" },
    { id: "QuitMessage", src: "../../Assets/images/QuitMessage.png" },
    { id: "Yes", src: "../../Assets/images/Yes.png" },
    { id: "No", src: "../../Assets/images/No.png" },
    { id: "JackpotMessage", src: "../../Assets/images/jackpotMessage.png" },
    { id: "ThankYou", src: "../../Assets/images/ThankYou.jpg" },
    { id: "PlayAgainButton", src: "../../Assets/images/PlayAgain.png" },
    { id: "Home", src: "../../Assets/images/Home.png" },
    { id: "BlackBackground", src: "../../Assets/images/BlackBackground.png" },
    { id: "WhiteBackground", src: "../../Assets/images/WhiteBackground.png" } //fade effect
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.addEventListener("progress", handleProgress);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function handleProgress(event) {
    percentLoaded = event.loaded;
    document.getElementById("load").innerHTML = "Loading. . ." + (Math.floor(percentLoaded * 100)).toString() + "%";
}
function init() {
    // remove loading status
    document.getElementById("load").remove();
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.SLOT_MACHINE:
            // show the SLOT MACHINE scene
            stage.removeAllChildren();
            slotMachine = new scenes.SlotMachine();
            currentScene = slotMachine;
            console.log("Starting SLOT_MACHINE Scene");
            break;
        case config.Scene.GAME_OVER:
            // show the GAME OVER scene
            stage.removeAllChildren();
            gameOver = new scenes.GameOver();
            currentScene = gameOver;
            console.log("Starting GAME_OVER Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
//# sourceMappingURL=game.js.map