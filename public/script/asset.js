
/**
 * 
 * @returns div with background image as car, loaded from spritesheet
 */
function car1(){
    let carimage=document.createElement('div');
    carimage.style.width=toPx(widthOfCar);
    carimage.style.height=toPx(heightOfCar);
    carimage.style.backgroundColor='black'
    carimage.style.background="url(../assets/carsprite.jpg) -15px -187px";
    return carimage;
}


function car3(){
    let carimage=document.createElement('div');
    carimage.style.width=toPx(widthOfCar);
    carimage.style.height=toPx(heightOfCar);
    carimage.style.backgroundColor='white';
    carimage.style.background="url(../assets/carsprite.jpg) -120px -188px";
    return carimage;
}


/**
 * 
 * @param {*} value determines which image from spritesheet is to be loaded
 * @returns returns div with background image as car, from spritesheet
 */


function carsprite(value){
    if(value==1){
        return car1();
    }
    else{
        return car3();
    }
}



/**
 * 
 * @returns div with background image as bushes/trees, loaded from spritesheet
 */
function envObj1(){

    let envImage=document.createElement('div');
    envImage.style.width='67px';
    envImage.style.height='62px';
    envImage.style.borderRadius='70%'


    envImage.style.backgroundColor='transparent';
    envImage.style.background="url(../assets/envsprite.png) -67px -204px";
    return envImage;
}
function envObj2(){

    let envImage=document.createElement('div');
    envImage.style.width='63px';
    envImage.style.height='67px';
    // envImage.style.borderRadius='60%'

    envImage.style.backgroundColor='transparent';
    envImage.style.background="url(../assets/envsprite.png) -278px -350px";
    return envImage;
}

function envobjSprite(value){
    if(value==0){
        return envObj1();
    }
    else{
        return envObj2();
    }
}
