
var startmenu = document.querySelector('.startmenu')
var startbtn = document.querySelector('#startbutton')
var backbtn = document.querySelector('#backbutton')

var gamewindow = document.querySelector('.gamewindow')
var gameoverScreen = document.querySelector('.gameover')


/**
 * startbtn and backbtn eventlistener is for navigation.
 */

startbtn.addEventListener('click', event => {
    backbtn.style.display = 'block';
    startbtn.style.display = 'none';
    gamewindow.style.display = 'block';
    gameoverScreen.style.display = 'none';


})

backbtn.addEventListener('click', event => {
    startbtn.style.display = 'block';
    backbtn.style.display = 'none';
    gamewindow.style.display = 'none';
    gameoverScreen.style.display = 'none';

})


/**
 * environmenta objects array 
 */

var envObjArray = []
for (let j = 0; j < 10; j++) {
    let obj = new Env(0, twoEnvObjSpots[j % 2], Math.round(generateRandom(0, 1)));
    envObjArray.push(obj);
}


/**
 * player car object
 */
var playercar = new Car(heightOfRoad - 70, widthOfRoad / 2, 30, 40, 1, 3);
playercar.listenKeyPress();
playercar.createScore();


/**
 * bot cars arry
 */
botcarArray = []
for (let i = 0; i < 5; i++) {
    let botcar = new Car(heightOfRoad * 2, threeCenterSpots[i], 30, 40, 1, 1);
    botcarArray.push(botcar);
}


//this is collision detection flag
var gameover = false


function play() {

    envObjArray.forEach((value, index) => {
        value.moveDown();
        value.outofScreenCheck();
    });

    botcarArray.forEach((value, index) => {
        value.moveDown();
        value.outofScreenCheck(botcarArray, index);
    });


    playercar.showScore();

    //if collision was detected set 'gameover' flag
    gameover = playercar.collisionCheck(botcarArray);

    //if gameover reinitialize some parameters
    if (gameover == true) {

        botcarArray.forEach((value, index) => {
            value.respawn(botcarArray, index);
        });
        speed = 0;
        playercar.score = 0;
        gameover = false;
        gamewindow.style.display = 'none';
        gameoverScreen.style.display = 'block';
        // enableGameStatusChecking=false;
    }


    /**
     * speed of bot car directly proportional to playercar's score
     * roadmovenet's animation time inversely proportional to player's score
     * Environmental objects speed matches road lane speed, in following manner
     * All these parameters can to be fine tuned further.
     */
    speed = (playercar.score / 130 + 1) * 3;
    roadmovement = 15 / (playercar.score + 1)
    envObjSpeed = 15 / roadmovement;

    gamewindow.style.animation = `carMove linear ${roadmovement}s infinite`;

    window.requestAnimationFrame(() => {
        play();
    })
}
play();






