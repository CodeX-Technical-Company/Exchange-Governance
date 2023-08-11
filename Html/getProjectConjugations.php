
<?php 

$host = 'localhost';
$user = 'root';
$password_db = '';
$database = 'association_db';

$conn = mysqli_connect($host, $user, $password_db, $database);

$query = "SELECT * FROM projectconjugationsw";
$result = mysqli_query($conn, $query);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
header("content-type: JSON");

echo json_encode($data);