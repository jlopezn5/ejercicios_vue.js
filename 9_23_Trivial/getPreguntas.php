<?php

$db = new mysqli('localhost','root','','trivial',3306);
if (!$db) {
    die('Error al conectar a la BBDD: ' . mysqli_error($con));
}
$db->set_charset("utf8");

$sql="SELECT * FROM preguntas";
$result =  $db->query($sql);
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