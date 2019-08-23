function inCanvas(){
    var ctx = document.getElementById('my_canvas').getContext('2d');
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var y = 0;var x=0;var z=y;
    function animate(){
        
        ctx.clearRect(0, 0, cW, cH);
        ctx.fillStyle= "blue";
        ctx.fillRect(0, y, 50, 50);
        y++;
        ctx.fillStyle="magenta";
        ctx.fillRect(x,0,50,50);
        x++;
        ctx.fillStyle= "yellow";
        ctx.fillRect(350, 0, 20, 30);
        ctx.fillStyle= "green";
        ctx.fillRect(0, 350, 30, 20);
        if(x==300)
        {
            x=0;
        }
        if(y==300)
        {
            y=0;
        }
        

    }
    var animateInterval=setInterval(animate,25);
}
window.addEventListener('load',function(){
inCanvas();
});