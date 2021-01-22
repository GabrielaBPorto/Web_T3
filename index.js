function draw() {
    var canvas = document.getElementById('tutorial');
    canvas.style="border:solid;border-size:2px;border-radius:10px"

    canvas.width = $( window ).width()
    canvas.height = $( window ).height()
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');

    var a = ctx.beginPath();
    var b = ctx.moveTo(($( window ).width()/3), $( window ).height()/4);
    var c = ctx.lineTo($( window ).width()/2, $( window ).height()/2);
    var d = ctx.stroke();

    console.log(a,b,c,d)
    }
    else{
        console.log('erro')
    }

    console.log('jdiso')
    canvas.click((event) => {
        var offset = $(this).offset()
        console.log(offset)
        console.log(event.clientX)
        console.log(event.clientY)
    })

    $('#tutorial').click(function (event) { //Default mouse Position 
        alert(event.pageX + ' , ' + event.pageY);
    });
}

$(document).ready(() => {
    
})
