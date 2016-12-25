<?php
	require_once(dirname($_SERVER['DOCUMENT_ROOT']).DIRECTORY_SEPARATOR.'sendMail.php');

	header('Content-Type: application/json');
	$r = array(
		'result' => false,
		'code' => '403',
	);

	if(
		isset($_POST['name']) &&
		isset($_POST['email']) &&
		isset($_POST['subject']) &&
		isset($_POST['message'])
	){
		// $_POST['name']
		// $_POST['email']
		// $_POST['subject']
		// $_POST['message']

		$r['result'] = sendMail('alex@nikitin.ninja', $_POST['email'], '[From Site] ' . $_POST['subject'], json_encode($_POST, JSON_PRETTY_PRINT));
		$r['code'] = '200';
	}

	// sleep(2);
	echo json_encode($r);
?>