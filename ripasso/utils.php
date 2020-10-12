<?php

// return float standard deviation
function std($arr) 
    { 
        $num_of_elements = count($arr); 
          
        $variance = 0.0; 

        $average = array_sum($arr)/$num_of_elements; 
          
        foreach($arr as $ele) 
        { 
            $variance += ($ele - $average)**2; 
        } 
          
        return (float)sqrt($variance/$num_of_elements); 
    } 

//return float gauss 
function gauss($arr)
    {
        $count = count($arr);
        $s = $count * ($count + 1) / 2;

        return $s;
    }
?>