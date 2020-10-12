<?php
    include 'utils.php';

    $ciao = [];

    for($i = 0; $i < 100; $i ++){
        $ciao[] = rand(0,100);
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funzioni</title>

    <style>
        table{
            width: 300px;
            color: aliceblue;
            background: rgb(2,0,36);
background: linear-gradient(263deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 87%, rgba(0,212,255,1) 100%);
        }

        th{
            border-right: solid 1px aliceblue;
        }

        td,th{
            padding: 10px;
            border-bottom: solid 1px aliceblue;
        }
    </style>

</head>
<body>
    <table>
        <tr>
            <th>array</th>
            <td><?=$ciao?></td>
        </tr>
        <tr>
            <th>count</th>
            <td><?=count($ciao)?></td>
        </tr>
        <tr>
            <th>max</th>
            <td><?=max($ciao)?></td>
        </tr>
        <tr>
            <th>min</th>
            <td><?=min($ciao)?></td>
        </tr>
        <tr>
            <th>sum</th>
            <td><?=array_sum($ciao)?></td>
        </tr>
        <tr>
            <th>avg</th>
            <td><?=array_sum($ciao) / count($ciao)?></td>
        </tr>
        <tr>
            <th>std</th>
            <td><?=round(std($ciao),2)?></td>
        </tr>
        <tr>
            <th>gauss</th>
            <td><?=gauss($ciao)?></td>
        </tr>
    </table>
</body>
</html>