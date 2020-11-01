<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test() {
        return [
            'ciao' => 1,
            'key2' => 'banana',

        ];
    }
}
