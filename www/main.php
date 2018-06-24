
<Html>
<head>
<link href="style.css" rel="stylesheet">

</head>
<body>

	<table>
	
	<td>
	<table>
	
	<tr><td> <div id = "had"><h1>ИСКХ</h1>  </div> </td></tr>
	<tr>
	
	<td> <div id = "left_menu"> 
	
		<?php 
		include "php/include.php";
		$connect = mysql_connect("localhost", "root", "") or die (mysql_error());
		mysql_select_db("uni-ugresha_comm");
		
		$result = mysql_query("SELECT id,name FROM bulding"); ?>
		
	
		
	<div id="building">	
		<?
		echo "<select onchange =$floorchange(value) name='build'>";
		echo "<option value='0'>Выберете здание... </option>";
		while ($buil= mysql_fetch_array($result, MYSQL_ASSOC)) {
			
		echo "<option value= ".$buil["id"].">" .$buil["name"]. "</option>"; 
		}
		echo "</select>"; 
		echo "<button> добавить здание </button>";?>
	</div>
	
	
	<div id ="floor">
		<?
		$result = mysql_query("SELECT * FROM floor ");
		
		
		echo "<select name='floor'>";
		echo "<option value='0'>Выберете этаж... </option>";
		while ($fl= mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo "<option value= ".$fl['id'].">" .$fl['name'].  "</option>"; 
		}
		echo "</select>"; ?>
		<button> добавить здание </button>;
	
	
	</div>
	
</div>
		<?/*$("select").change(function(){
		if($(this).val() == 0) return false;
		вызов php функции
		
		});
			
		сохранение выбранного этажа
		
		$result = mysql_query("SELECT * FROM comm WHERE floor_id == выбранное значение ");
		
		
		echo "<select name='comm'>";
		echo "<option value='0'>Выберете коммуникацию... </option>";
		while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo "<option value= ".$result['id'].">" .$result['name']. "</option>"; 
		echo "<script>console.log( 'Debug Objects: " . $result['name'] . "' ) </script>";}	
		<button> добавить коммуникацию </button>
				
		сохранение точек в js массив 
		value таблицей*/
		?>
	</td>

	
	

	
	<td> 
	<table>
	<tr>
	<button>Коммуникация1 </button><button>Коммуникация2</button><button>Коммуникация3</button>
	</tr>
	<tr>
	<div class = "can" >	<canvas onclick="getCoords(event)" id="myCanvas" ></canvas>  	</div> 
	</tr>
	</table>
	</td>
	
	
   </table> 
   </td>
   
   
   
   
   
   <td>
   <div width = "100px" panding = "0px">
   <button width = "100px" height="100px">линия</button>
   <button width = "100px" height="100px">вход/выход</button>
   
   <button width = "100px" height="100px">элемент</button>
   </div>
   
   </td>
   </table>
   <script src = "js/ris.js"></script>
</body>
</html>