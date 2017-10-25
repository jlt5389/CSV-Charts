<?php

function csv_open($filename) {
    $data_array = array();
    if (($handle = fopen($filename, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            array_push($data_array, $data);
        }
        fclose($handle);
    }
    return $data_array;
}

function json_encode_2d($array_2d) {
    foreach ($array_2d as $row) {
        foreach ($row as $value) {
            # code...
        }
    }
}

?>