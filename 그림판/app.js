const loc = document.getElementById("jsCanvas");
const ctx = loc.getContext("2d");       

const colors = document.getElementsByClassName("controls__color");
const brushsize = document.getElementById("range");

const fill = document.getElementById("fill");
const save = document.getElementById("save");

console.log(ctx);

loc.width = 1000;
loc.height = 800;

let onpoint = false;

function background(){
    loc.style.backgroundColor = ctx.strokeStyle;
    ctx.fillStyle= ctx.strokeStyle;
    ctx.fillRect(0,0,1000,800);
}

function download(event){
    const img = loc.toDataURL();
    const link = document.createElement("a");
    link.href = img;
    link.download = "PaintJs"
    link.click();    
}

function changecolor(event){
    const brushcolor = event.target.style.backgroundColor;
    ctx.strokeStyle = brushcolor;
}

function stop(event){
    onpoint = false;
}

function onMousemove(event){
    const X = event.offsetX;
    const Y = event.offsetY;
    if(onpoint){
    ctx.lineTo(X,Y);
    ctx.stroke();
    }
    else{
        ctx.beginPath();
    }
}

function strPaint(event){
    onpoint = true;
}

    loc.addEventListener("mousemove", onMousemove);
    loc.addEventListener("mousedown", strPaint);
    loc.addEventListener("mouseleave", stop);
    loc.addEventListener("mouseup", stop);
    Array.from(colors).forEach(color => color.addEventListener("click", changecolor));
    brushsize.onchange = function(){ let size = brushsize.value; ctx.lineWidth =size; console.log(brushsize.value)}
    fill.addEventListener("click", background);
    save.addEventListener("click", download );