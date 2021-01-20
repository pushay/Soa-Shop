<?php

    include 'filter.php';
    ///CORS
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    //connecting to SQL

    function connectSQl(){

        $hostname = 'sql107.epizy.com';
        $username = 'epiz_27717902';
        $password = 'QY0dc5UFJNYo7';
        $db = 'epiz_27717902_database832';

        $connection = new mysqli($hostname, $username, $password, $db);
    
        if ($connection->connect_error){
            die('Connection failed' . $connection->connect_error);
        }
        return $connection;
    }

    $connection = connectSQl();
    $filters =  filterData();

    $sql = 'SELECT * FROM clothes';
    if (strlen($filters) > 0) {
        $sql = $sql . ' WHERE ' .$filters;
    } 

    $result = $connection->query($sql);
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));

    $connection->close();
    
?>