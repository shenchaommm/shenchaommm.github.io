<?PHP
$q=$_REQUEST["value"];
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= "From:shenchaommm@163.com" . "\r\n";
mail("260910853@qq.com", "WeatherWin8", $q, $headers);
echo $q;
?>