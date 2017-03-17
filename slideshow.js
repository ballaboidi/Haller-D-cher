//Array of images which you want to show: Use path you want.
var images=new Array('./img/standard roof.jpeg','./img/Solarroof.jpg','./img/worker.JPG');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('#showcase')
    .css('background','url("'+images[nextimage++]+'") no-repeat center')
    .fadeIn(1000,function(){
        setTimeout(doSlideshow,5000);
    });
}
