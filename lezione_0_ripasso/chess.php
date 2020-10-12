<?php
    $rows = $_REQUEST['rows'];
    $cols=$_REQUEST['cols'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chessoard</title>
    <style>
        td{
            width: 50px;
            height: 50px;
        }
        .white{
            background-color: aliceblue;
        }
        .black{
            background-color: black;
        }
    </style>
</head>
<body>
    <form method="GET">
        <table>
            <tr>
                <td>Rows</td>
                <td><input type="range" min="1" max="20" value="<?=$rows?>" name="rows"></td>
                <td><?=$rows?></td>
            </tr>
            <tr>
                <td>Cols</td>
                <td><input type="range" min="1" max="20" value="<?=$cols?>" name="cols"></td>
                <td><?=$cols?></td>
            </tr>
        
        </table>
        <input type="submit">
    </form>


    <table>
    <?php
        for($j = 0; $j < $rows; $j++){
            echo '<tr>';
            for($i = 0; $i < $cols; $i++) {
                $class = (($i + $j) % 2 == 0 ? 'white' : 'black');
                echo '<td class="'.$class.'"></td>';
            }
            echo '</tr>';        
        }
    ?>
    </table>
    
</body>
</html>