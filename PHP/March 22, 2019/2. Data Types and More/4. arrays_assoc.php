<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
</head>
<body>
    <?php
        $names1 = array('Costa', 'Dybala', 'Ronaldo');

        // print_r($names1);

        $names2 = array('firstName' => 'Diego', 'lastName' => 'Costa');

        echo '<br>';

        // print_r($names2);

        echo $names2['firstName'] . ' ' .$names2['lastName'];
    ?>
</body>
</html>