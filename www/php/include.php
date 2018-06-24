<?
function floorchange($bulld_id){
	if($bulld_id!= 0){
		$connect = mysql_connect("localhost", "root", "") or die (mysql_error());
		mysql_select_db("uni-ugresha_comm");
		$result = mysql_query("SELECT * FROM floor WHERE bulding_id == $build_id");
	}
		echo "<select name='floor'>";
		echo "<option value='0'>Выберете этаж... </option>";
		while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo "<option value= ".$result['id'].">" .$result['name']. "</option>"; 
		echo "<script>console.log( 'Debug Objects: " . $result['name'] . "' ) </script>";}	
		echo "</select>"; 
		echo "<button> добавить здание </button>";
	
	
}




?>