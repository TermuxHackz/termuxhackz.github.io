<?php
function shapeSpace_block_proxy_visits() {
	
	$headers = array('CLIENT_IP','FORWARDED','FORWARDED_FOR','FORWARDED_FOR_IP','VIA','X_FORWARDED','X_FORWARDED_FOR','HTTP_CLIENT_IP','HTTP_FORWARDED','HTTP_FORWARDED_FOR','HTTP_FORWARDED_FOR_IP','HTTP_PROXY_CONNECTION','HTTP_VIA','HTTP_X_FORWARDED','HTTP_X_FORWARDED_FOR');
	
	foreach ($headers as $header){
		if (isset($_SERVER[$header])) {
			die('Proxy access not allowed.');
		}
	}
}
?>
