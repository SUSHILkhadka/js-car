/**
 * Class for Environmental Objects
 * 
 */

class Env{

    constructor(top,left,spriteNo=1){
        this.top=top;
        this.left=left;
        this.spriteNo=spriteNo;
        this.create();
        if(left<0){
            this.toLeft();
        }
    }

    create(){

        this.envObjRectangle = document.createElement('div');
        this.envObjRectangle.style.position = 'absolute';
        this.envObjRectangle.style.top = toPx(this.top);
        this.envObjRectangle.style.left = toPercent(this.left);
        this.envObjRectangle.style.width = toPx(envObjWidth);
        this.envObjRectangle.style.height = toPx(envObjWidth);
        // this.envObjRectangle.style.zIndex='1';

        this.envObjRectangle.append(envobjSprite(this.spriteNo));
        gamewindow.append(this.envObjRectangle);
    }

    /**
     * left in px value sticks child to parent ,for responsive design
     */

    toLeft(){
        this.envObjRectangle.style.left = toPx(this.left);

    }

    moveDown() {
        this.top += envObjSpeed;
        this.envObjRectangle.style.top = toPx(this.top);
    }
    
    outofScreenCheck() {
        if (this.top > heightOfRoad) {
            //spawn logic
            this.top =4* generateRandom(-30,-600);
        }   
    }
    
}