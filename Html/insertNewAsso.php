
<?php 

$host = 'localhost';
$user = 'root';
$password_db = '';
$database = 'association_db';

$conn = mysqli_connect($host, $user, $password_db, $database);

if($conn === false) {
    die("ERROR: could not connect. " . mysqli_connect_error());
}

$assoName = $_REQUEST['name'];
$joinOpt = $_REQUEST['state'] ? 1 : 0;
print($joinOpt);
$sql = "INSERT INTO associations (name, join_option) VALUES ('$assoName', '$joinOpt')";

if(mysqli_query($conn, $sql)) {
    echo "<h3>data stored in a database successuflly."
    . "Please browse your localhost php my admin"
    . "to view the updated data</h3>";
    header("Location: associationW.html");
    exit;
}else {
    echo "ERROR: Hush! Sorry $sql."
    . mysqli_error($conn);
}

mysqli_close($conn);
?>

