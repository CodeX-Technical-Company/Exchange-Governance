<?php 

    header('Content-Type:application/json');
    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
    $id = $data['id'];
    $state = $data['state'];


    $conn = mysqli_connect('localhost', 'root', '', 'association_db');
       if(!$conn) {
        http_response_code(500);
        echo json_encode(array('message' => 'Faield to connect to the db'));
        exit();
       }
       $sql = "UPDATE associations SET join_option = 1 WHERE id = $id";

       if(mysqli_query($conn, $sql)) {
        http_response_code(200);
        echo json_encode(array('message' => 'Record updated successfully'));
       }else {
        http_response_code(500);
        echo json_encode(array('message' => 'Faield to connect to the db'));
       }

       mysql_close($conn);
    
?>