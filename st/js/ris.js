 
    var coords = [];
    var perps = [];
	
	
    var ctx = document.getElementById("myCanvas").getContext("2d");
	myCanvas.height = 700;
	myCanvas.width = document.documentElement.clientWidth - 400;
	
        function getCoords(e)
        {
			var x = e.pageX - e.target.offsetLeft;
			var y = e.pageY - e.target.offsetTop;
			console.log(x,y);
			
			
            drawCircle(e.clientX-315, e.clientY-136, 3); 
			i=coords.length;
			coords[i]=e.clientX-315;
			coords[i+1] = e.clientY-136;
			
           // coords.push(e.clientX-100, e.clientY-100);
			console.log(coords[i],coords[i+1]);

            if (coords.length > 1) {
                //x1 = coords[0]; y1 = coords[2];
               // x2 = coords[1]; y2 = coords[3];

                //var perpX = (x1 + y1)/2;
                //var perpY = (x2 + y2)/2;

                //drawCircle(perpX-100, perpY-100, 3);

              
                drawLine(coords[coords.length-4], coords[coords.length-3], coords[coords.length-2], coords[coords.length-1]);
                

            }
        }


    function drawLine(x_first, y_first, x_second, y_second) 
    {
        ctx.beginPath();   
        ctx.moveTo( x_first, y_first );
        ctx.lineTo( x_second, y_second );
        ctx.lineWidth = 2; 
        ctx.stroke();
    }

    function drawCircle(x, y, radius) 
    {
        ctx.beginPath();  
        ctx.arc(x, y, radius, 0, Math.PI*2, false);  
        ctx.closePath();  
        ctx.fill();  
    }
