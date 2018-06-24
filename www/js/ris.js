	
	/*$(document).ready(function(){
	fill_select();
	});*/
	
    var coords = [];
    var perps = [];
	
	var com =[
	["name","nametext","диаметр","состояние", "стату", "год установки", "срок службы"],
	["ot", "отопление",20, "исправно", "работает", 2010, 50 ]
	]
	
	
	var arr_uni=[
	["0","Подвал"],
	["1","Первый этаж"],
	["2","Второй этаж"],
	["3","Третий этаж"],
	["4","Четвертый этаж"],
	];
	var arr_col=[
	["0","Подвал"],
	["1","Первый этаж"],
	["2","Второй этаж"],
	["3","Третий этаж"],
	];
	
	var arr_option=new Array();
	
	function fill_select()
	{
		var val_building=document.getElementById("Zdanie").value;
		
		if (document.getElementById("Etaz").childNodes.length>1)
		{
			for (var i = 0; i < arr_option.length; i++) {
			arr_option[i].remove();
	3	}
			arr_option=new Array();
		}
		
		var arr_table_selected=new Array();
		
		if (val_building=="1")
		{arr_table_selected=arr_col;}
		else
		{arr_table_selected=arr_uni;}	
	
				for(i=0;i<arr_table_selected.length;i++)
			{	
			var option=document.createElement('option');
			option.value=arr_table_selected[i][0];
			option.text=arr_table_selected[i][1];
			
		 	arr_option.push(option);
		 	document.getElementById("Etaz").add(arr_option[i]);
			}	
	}
	function com_info(){
		
		for(i=0;i<com.length;i++){
			
		var para = document.createElement("p");
		for(j=0;j<com[i].length;j++){
			para.appendChild(document.createTextNode(com[i][j] + " ||| "));			
		};
		document.getElementById("com_info").appendChild(para);
		}
		
	}

    var ctx = document.getElementById("myCanvas").getContext("2d");
	
	myCanvas.height = 700;
	myCanvas.width = 1500;
	var c = myCanvas.getBoundingClientRect();
        function getCoords(e)
        {
			var x = e.pageX - c.left;
			var y = e.pageY - c.top;
			console.log(x,y,myCanvas.offsetLeft,myCanvas.offsetTop);
				
            drawCircle(x, y, 3); 
			i=coords.length;
			coords[i]=x;
			coords[i+1] = y;
			
           	console.log(i,coords[i]);

            if (coords.length > 1) {
               
				if (Math.abs(coords[coords.length-4] - coords[coords.length-2]) < 20){coords[coords.length-2]=coords[coords.length-4]};
				if (Math.abs(coords[coords.length-3] - coords[coords.length-1]) < 20){coords[coords.length-1]=coords[coords.length-3]};
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


