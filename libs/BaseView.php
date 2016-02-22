<?php

/**
 * Created by PhpStorm.
 * User: mkt
 * Date: 2016-02-22
 * Time: 09:10
 */
class BaseView
{

    function __construct(){

    }

    public function render($name){
        require 'public/views/' . $name . '.html';
    }

}