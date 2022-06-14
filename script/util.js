
/**
 * takes integer and returns string with 'px' concatinated.
 */

function toPx(value){
    return `${value}px`
}

/**
 * takes integer and returns string with '%' concatinated.
 */
function toPercent(value){
    return `${value}%`
}

/** 
 * takes min amd max value, and returns random number in that range
*/
function generateRandom(min,max){
    return (Math.random()*(max-min)+min);
}

/**
 * 
 * @param {*} top1 y value of rectangle1,top-left corner
 * @param {*} left1 x value of rectangle1,top-left corner
 * @param {*} width1 width of rectangle 1
 * @param {*} height1 height of rectangle1
 * @param {*} top2 
 * @param {*} left2 
 * @param {*} width2 
 * @param {*} height2 
 * @returns 'true' if 2 rectangle intersects.
 */

function intersectionOfRectangle(top1,left1,width1,height1,top2,left2,width2,height2){
    if(top2>top1+heightOfCar || top1>top2+heightOfCar){
        return false;
    }
    if(left2>left1+widthOfCar || left1>left2+widthOfCar){
        return false;
    }
    return true;

}