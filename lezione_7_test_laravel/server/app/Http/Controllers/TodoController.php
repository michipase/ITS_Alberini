<?php



namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    public function addTodo(){
        return Todo::insert(['task' => 'andarmene']);
    }

    public function removeTodo(){
        return;
    }

    public function getTodo(){
    }

    public function getTodos(){
        return Todo::all();
    }
}
