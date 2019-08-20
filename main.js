function initCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var y = 0;var x=0;
    function animate(){
        ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        ctx.fillStyle= "blue";
        ctx.fillRect(0, y, 50, 50);
        y++;
        ctx.fillStyle="magenta";
        ctx.fillRect(x,0,50,50);
        x=x+2;
        if(x==450)
            y+=1;
        if(y==250)
            x+=1;
        ctx.restore();
    }
    var animateInterval=setInterval(animate,30);
}
window.addEventListener('load',function(){
initCanvas();
});