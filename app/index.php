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

    <header>
        <div>
            <i class="fa fa-globe"></i> Weather Station
        </div>
    </header>
    <main class="page-forecast">
        <h1>Weather Forecast</h1>
        <p>Enter a city name below in order to get the three day weather forecast for that location.</p>
        <form method="post" action=".">
            <fieldset class="input-group">
                <input type="text" name="place" class="form-control" placeholder="Enter city name, Example: Detroit, MI" aria-label="City Name" value="">
                <span class="input-group-addon"><button type="submit" aria-label="search"><i class="fa fa-search"></i></button></span>
            </fieldset>
        </form>
        <div id="container-results">

        </div>
    </main>
    <footer>&copy; <?php echo date("Y"); ?> Scott Daniels</footer>

    <!-- JAVASCRIPT -->

    <?php require('_/inc/tail.php'); ?>
</body>
</html>
