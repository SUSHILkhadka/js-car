/**
 * spriteNo determines which sprite image is used for car
 */



class Car {

    /**
     * 
     * @param {*} top starting y position 
     * @param {*} left starting x position
     * @param {*} width 
     * @param {*} height 
     * @param {*} speed speed of car(only relevant for bot cars)
     * @param {*} spriteNo determines which sprite image is to be fetched
     */
    constructor(top, left, width, height, speed, spriteNo) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.spriteNo = spriteNo;
        this.createCar();
        this.score = 0;
    }
    createCar() {
        this.carRectangle = document.createElement('div');
        this.carRectangle.style.position = 'absolute';
        this.carRectangle.style.top = toPx(this.top);
        this.carRectangle.style.left = toPx(this.left);
        this.carRectangle.style.width = toPx(this.width);
        this.carRectangle.style.height = toPx(this.height);

        this.carRectangle.append(carsprite(this.spriteNo));
        gamewindow.append(this.carRectangle);
    }
    createScore() {
        this.scoreDiv = document.createElement('div');
        this.scoreDiv.innerHTML = `${this.score}`;
        this.scoreDiv.style.textAlign = 'center';
        gamewindow.append(this.scoreDiv);

    }

            /**
         * shows current score,highest score. Also store in local storage if current score is highest
         */
    showScore() {
        let highestScore=localStorage.getItem('highestScore') ? localStorage.getItem('highestScore') : 0;
        if(this.score>highestScore)
        {
        localStorage.setItem('highestScore',this.score);
        }
        this.scoreDiv.innerHTML = `Your Score:${this.score}&nbsp&nbsp&nbsp&nbsp Record:${highestScore}`;

    }



    listenKeyPress() {
        document.addEventListener('keypress', function event(e) {
            if (freezeFlag == false) {
                let destination = this.left;

                //if right key, go to right index in threeCenterSpots
                if (e.code == 'KeyD') {
                    if (this.left != threeCenterSpots[2]) {
                        freezeFlag = true;
                        if (this.left == threeCenterSpots[0]) destination = threeCenterSpots[1];
                        if (this.left == threeCenterSpots[1]) destination = threeCenterSpots[2];
                    }
                }

                //if left key, go to left index in threeCenterSpots
                if (e.code == 'KeyA') {
                    if (this.left != threeCenterSpots[0]) {
                        freezeFlag = true;
                        if (this.left == threeCenterSpots[2]) destination = threeCenterSpots[1];
                        if (this.left == threeCenterSpots[1]) destination = threeCenterSpots[0];
                    }
                }

                //set 'freezeFlag',and unset it only after freezeTime.
                setTimeout(function () {
                    freezeFlag = false;
                }, freezeTime);

                /**
                 * flag for animation
                 */
                let greater = 1;
                if (this.left > destination) {
                    greater = -1;
                }

                /**
                 * animation part
                 */
                if (this.left != destination) {
                    var interval = setInterval(function () {
                        this.left += (greater * sensitivity);
                        this.carRectangle.style.left = toPx(this.left);
                        if (greater == 1) {
                            if (this.left + sensitivity >= destination) {
                                this.left = destination;
                                this.carRectangle.style.left = toPx(this.left);
                                clearInterval(interval);
                            }
                        }
                        if (greater == -1) {
                            if (this.left - sensitivity <= destination) {
                                this.left = destination;
                                this.carRectangle.style.left = toPx(this.left);
                                clearInterval(interval)
                            }
                        }
                    }.bind(this), 1000 / 60)
                }

                
            }
        }.bind(this))

    }

    /**
     * animate bot cars download
     */

    moveDown() {
        this.top += speed;
        this.carRectangle.style.top = toPx(this.top);
        this.carRectangle.style.left = toPx(this.left);
    }

    /**
     * 
     * @param {*} array this is array of all bot cars
     * @returns collision status and increments score
     */
    collisionCheck(array) {
        for (let i = 0; i < array.length; i++) {

            /**
             * collision check
             */
            let collided = false;
            let another = array[i];
            collided = intersectionOfRectangle(this.top, this.left, this.width, this.height, another.top, another.left, another.width, another.height);
            if (collided == true) {
                return true;
            }
            /**
             * score update
             */

            if (another.top <= this.top && another.top + speed >= this.top) {
                this.score++;
            }
        }
        return false;
    }

    /**
     * 
     * @param {*} botcarArray this is array of all bot cars
     * @param {*} i present object indedx
     * this checks if car has overflown. If overflown, calls respawn function
     */

    outofScreenCheck(botcarArray, i) {
        if (this.top > heightOfRoad) {
            this.respawn(botcarArray,i);
        }
    }

        /**
     * 
     * @param {*} botcarArray this is array of all bot cars
     * @param {*} i present object indedx
     * respawns bot cars with space in y axis spacing, ranging from '0/1/2' * 'height of car'
     */
    respawn(botcarArray,i){
        if (i == 0) {
            this.top = firstRespawnOffset;
            this.left = threeCenterSpots[Math.round(generateRandom(0, 2))]
        }
        else {
            let topGap = Math.round(generateRandom(1, 5));
            let smallerOffset=botcarArray[i - 1].top<firstRespawnOffset?botcarArray[i - 1].top:firstRespawnOffset;
            this.top = smallerOffset- (topGap + 1) * heightOfCar;
            this.left = threeCenterSpots[Math.round(generateRandom(0, 2))];
        }

    }

}