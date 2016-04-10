<?php require($_SERVER['DOCUMENT_ROOT'] . '/_/inc/init.php'); ?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js ie ie6 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js ie ie7 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js ie ie8 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js ie ie9 lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <title>Weather Forecast</title>
    <meta name="description" content="">
    <?php require("_/inc/head.php"); ?>
</head>
<body>
    <div id="page"></div>
    <script id="template-serviceError" type="text/handlebars">
        <div class="container-error">
            There was an error retrieving the content.
        </div>
    </script>
    <script id="template-loading" type="text/handlebars"t>
        <div class="conatiner-loading">
            <i class="fa fa-circle-o-notch fa-spin"></i> loading...
        </div>
    </script>
    <!-- JAVASCRIPT -->
    <?php require('_/inc/tail.php'); ?>
</body>
</html>
