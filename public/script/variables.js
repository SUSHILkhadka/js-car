/**
 * freezeFlag for not letting button spamming
 * freezeTime is interval, in which no keypress is registered.
 */


 var freezeFlag = false;//
 var freezeTime = 10;
 
 
 /**
  * 'speed' for changing bot car speed with playerscore
  * 'sensitivity' for player left and rigth transition with playerscore
  * 'roadmovement' for changing road lane animation speed with playerscore
  * 'envObjSpeed' for changing enviranmental obj speed wtih playerscore
  */
 
 var speed = 3;
 var sensitivity = speed*2;
 var roadmovement=0;
 var envObjSpeed=roadmovement;
 

 //'firstRespawnOffset' for respawning bot cars after they overflow from gamewndow
 var firstRespawnOffset=-60;