<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
</head>
<body>
    <?php
        $counter = 0;

        while ($counter < 10) {
            echo 'Hello ' . $counter . "<br>";
            $counter++;
        }
    ?>
</body>
</html>