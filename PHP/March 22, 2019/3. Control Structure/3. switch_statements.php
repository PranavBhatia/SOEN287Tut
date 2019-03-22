<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
</head>
<body>
    <?php
        $number = 34;

        switch ($number) {
            case 34:
                echo 'is it 34';
                // break;
            case 37:
                echo 'is it 37';
                // break;
            case 35:
                echo 'is it 35';
                // break;
            case 24:
                echo 'is it 24';
                // break;
            default:
                echo 'default executed';
                // break;
        }
    ?>
</body>
</html>