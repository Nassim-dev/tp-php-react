<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: content-type, authorization');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');


if($_SERVER['REQUEST_METHOD'] === 'OPTIONS')
    return 1;
// echo json_encode(
//     ['message' => 'hello']
// );

// $token = str_replace('Bearer', "", getallheaders()['authorization']);
// echo json_encode([
//     'token' => $token,
// ]);

// echo json_encode([
//     'username' => $_SERVER['PHP_AUTH_USER'],
//     'password' => $_SERVER['PHP_AUTH_PW']
// ]);

require __DIR__ . "/inc/bootstrap.php";
 
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );
if ((isset($uri[2]) && ($uri[2] != 'user' && $uri[2] != 'article')) || !isset($uri[3])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}

require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";
require PROJECT_ROOT_PATH . "/Controller/Api/ArticleController.php";

$objFeedController;
if ($uri[2] == 'user') {
    $objFeedController = new UserController();
}
else if ($uri[2] == 'article') {
    $objFeedController = new ArticleController();
}
$strMethodName = $uri[3] . 'Action';
$objFeedController->{$strMethodName}();
?>