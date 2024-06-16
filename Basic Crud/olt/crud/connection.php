<?php
	
	define("DSN","mysql:host=sql112.infinityfree.com=if0_36739437_employeedb");
	define("DBUSER","if0_36739437");
	define("DBPASS","xuUQC3DpRTdd4");

	try {

		$conn = new PDO(DSN, DBUSER, DBPASS);

	} catch (PDOException $e) {

		print "Error: " . $e->getMessage()  . "<br>";

		die();

	}

?>