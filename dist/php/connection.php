<?php
	function connect( $db ) {
		try {
			$conn = new PDO("mysql:host=localhost; dbname=$db; charset=utf8", 'root', '');
			echo 'Conectado correctamente';
			return $conn;
		} catch ( PDOException $error ) {
			echo 'Error ' . $error->getMessage();
		}
	}
