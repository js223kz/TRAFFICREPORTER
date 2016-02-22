<?php

class Main extends BaseController
{
    function __construct(){
        parent::__construct();
        $this->view->render('Main');
    }

    public function test($args = false){
        echo $args;
    }

}