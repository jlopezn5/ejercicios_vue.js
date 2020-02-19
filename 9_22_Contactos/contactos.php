<?php
	//Conecta
	$db = new mysqli('localhost','root','','contactos',3306);
	if (!$db) {
   	 die('Error al conectar a la BBDD: ' . mysqli_error($con));
	}
	$db->set_charset("utf8");

	//Extrae argumentos
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $op=$request->operacion;

    if ($op=='leer'){
    	
    } elseif ($op=='insertar'){
    	$nombre = $request->nombre;
    	$apellidos = $request->apellidos;
    	$email = $request->email;    	
		$sql="insert into contactos (nombre,apellidos,email) values('".$nombre."','".$apellidos."','".$email."')";
	 	$result =  $db->query($sql);
    } elseif ($op=='eliminar'){
    	$nombre = $request->nombre;
    	$sql="delete from contactos where nombre='".$nombre."'";
    	$db->query($sql);
    }

	$sql="select * from contactos";
	$result = $db->query($sql);
	$elementos_json=array();
	if ($result){
	    while($row =  $result->fetch_object()) {
	        $elementos_json[] = $row;
	    }
	} 

// Devolvemos un objeto JSON
echo json_encode($elementos_json);

// Cerramos conexión a BBDD
$db->close();

?>