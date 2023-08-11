
<?php 

// Connect to MySQL database
$host = 'localhost';
$user = 'root';
$password_db = '';
$database = 'association_db';

$conn = mysqli_connect($host, $user, $password_db, $database);

$query = "SELECT * FROM associations";
$result = mysqli_query($conn, $query);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
header("content-type: JSON");

echo json_encode($data);

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $delete =mysqli_query($conn, "DELETE FROM `associations` WHERE `id`='$id'");
    header("location:associationW.html");
    die();
    };
