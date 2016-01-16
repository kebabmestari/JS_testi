/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var closureTesti = ( function(){
    
    var luku = 0;
    
    return function(){
        luku++;
        return luku;
    };
    
}) ();

function funkkari(){
    document.getElementsByTagName("textarea")[0].value = closureTesti();
}