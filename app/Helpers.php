<?php

use Illuminate\Support\Facades\DB;

function getConfigValueByKey($key)
{
   
    $getSetting =  DB::table('settings')->select('value')->where(['key' => $key])->first();
    if (!empty($getSetting)) {
        return $getSetting->value;
    } else {
        return "";
    }
}



//set value
function installed($value)
{
    session(['installed' => $value]);
}

//get value
function isInstalled()
{
    return session('installed');
}


