<?php

class Route
{
    function __construct(){
        $url = isset($_GET['url']) ? $_GET['url'] : null;
        $url = rtrim($url, '/');
        $url = explode('/', $url);

        if(empty($url[0])){
            require 'controllers/Main.php';
            new Main();
            return false;
        }

        //check if file exists
        $file = 'controllers/' . $url[0] . '.php';

        if(file_exists($file)){

            //load controller
            require $file;
        }else{
            require 'controllers/Error.php';
            new Error();
            return false;
        }
        $controller = new $url[0];

        //check to see if arguments
        //are passed into url method
        if(isset($url[2])){
            $controller->{$url[1]}($url[2]);
        }else{
            //check to see if method name
            //is passed in the url
            if(isset($url[1])){
                $controller->{$url[1]}();
            }
        }
    }
}