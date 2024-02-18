<?php
    //connexion à la base de données
    $connect = new mysqli("localhost", "root", "","bd_otaku");

    //verifier la connexion
    if(!$connect) die('Erreur : '.mysqli_connect_error());



?>