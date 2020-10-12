<?php


$name = $_REQUEST['name'];
$rgba = [
    'r' => $_REQUEST['r'],
    'g' => $_REQUEST['g'],
    'b' => $_REQUEST['b'],
    'a' => $_REQUEST['a'],
];

if(empty($name)) {
    $benvenuto = '
    Benvenuto, per piacere inserisci il tuo nome<br>
    <form action="" method="POST">
        <input type="text" name="name" placeholder="Mario Rossi">
        <input type="submit">
    </form>';
} else {
    $benvenuto = 'Bentornato ' . $name .', <br> felice di rivederti!';
}

$color = 'rgba( $rgba["r"] , $rgba["g"] , $rgba["b"] , $rgba["a"]);';





?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms</title>
    <style>
        input[type=range]{
            width: 300px;
            margin: 20px;
        }
    </style>

</head>
<body style="background-color: <?=$color?>">
    <div>
        <?=$benvenuto?><br>
    </div>

    <?php if($name){?>
        <form method="GET">
            <div>
                <label>r: <?=$rgba['r']?></label>
                <input type="range" max = "255" min = "0" value="<?=$rgba['r']?>" name="r">
            </div>
            <div>
                <label>g: <?=$rgba['r']?></label>
                <input type="range" max = "255" min = "0" value="<?=$rgba['g']?>" name="g">
            </div>
            <div>
                <label>b: <?=$rgba['r']?></label>
                <input type="range" max = "255" min = "0" value="<?=$rgba['b']?>" name="b">
            </div>
            <div>
                <label>a: <?=$rgba['r']?></label>
                <input type="range" max = "255" min = "0" value="<?=$rgba['a']?>" name="a">
            </div>
            <input type="submit">
        </form>
    <?php
    }   
    ?>
    
    
</body>
</html>