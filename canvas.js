window.addEventListener("load",() => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');


    let painting=false;

    function startPosition(){
        painting = true;
    }
    function endPosition(){
        painting = false;
    }
    function draw(e){
        if(!painting) return;
        ctx.lineWidth=10;
        ctx.lineCap="round";
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke;
    }
    

    canvas.addEventListener("mousedown",startPosition);
    canvas.addEventListener("mouseup",endPosition);
    canvas.addEventListener("mousemove",draw);

});

