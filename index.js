function checkIfClickInLine(x1, x2, y1, y2, x, y, tolerate){
    // formula x*(y1 - y2) + y*(x2 - x1) + (x1*y2 - x2*y1)
    var slope = (y2-y1)/(x2-x1);
    var k = slope * x + y1;

    if((k <= y+tolerate && k >= y-tolerate) && (x >= x1 && x <= x2)) {
        return true;
    }
    return false;

}

function draw() {
    var canvas = document.getElementById('tutorial');
    canvas.style="border:solid;border-size:2px;border-radius:10px"
    var lines = Array()

    canvas.width = $( window ).width()/2
    canvas.height = $( window ).height()/2
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');


        ctx.beginPath();
        //ctx.lineWidth = 10;
        ctx.moveTo(($( window ).width()/3)/2, ($( window ).height()/4)/2);
        ctx.lineTo($( window ).width()/2, $( window ).height()/2);
        lines.push({x1: ($( window ).width()/3)/2, y1: ($( window ).height()/4)/2, x2: ($( window ).width()/2)/2, y2: ($( window ).height()/2)})
        ctx.stroke();
    }
    else{
        alert('erro')
    }


    

    console.log(lines)
    $('#tutorial').click(function (event) { //Default mouse Position 
        // alert(event.pageX + ' , ' + event.pageY);
        retorno = lines.forEach((line) => {
            if(checkIfClickInLine(line.x1, line.x2, line.y1, line.y2, event.pageX, event.pageY, 500)){
                return true
            }
        })
        console.log(retorno)

    });
}

$(document).ready(() => {
    
})
