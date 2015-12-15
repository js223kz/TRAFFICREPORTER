<?php
/**
 * Created by PhpStorm.
 * User: mkt
 * Date: 2015-12-15
 * Time: 11:29
 */

namespace views;


class MainView
{

    public function renderMainView($map, $list){
        echo
            '<!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <link rel="stylesheet" type="text/css" href="../contents/Styles.css">
            </head>
            <body>
                <header>

                </header>
                <div class="container">
                '.$map.'
                '.$list.'
                </div>
                <footer>
                <p class="footertext">Skapad av Johanna js223kz@student.lnu.se</p>
                </footer>
             </body>
          </html>
    ';
    }

}