/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvason = false;
var canvas = null;

var ctx = null;

var inte = setInterval( checkCanvas, 2000 );

function funkkari(){
   canvas = document.createElement("canvas");
   canvas.width = "300";
   canvas.height = "200";
   document.body.appendChild(canvas);
   canvason = true;
}

function checkCanvas(){
    if( canvason ){
        runCanvas();
        clearInterval( inte );
    }
}

function runCanvas(){
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo( 10,10 );
    ctx.lineTo(200,50);
    ctx.lineTo(10,100);
    ctx.closePath();
    ctx.stroke();
}