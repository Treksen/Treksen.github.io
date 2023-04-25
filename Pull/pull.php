<?php

// connect to database
$conn = pg_connect("host=localhost dbname=mydb user=myuser password=mypassword");

// select data from table
$result = pg_query($conn, "SELECT * FROM mytable");

// create array for markers
$markers = array();

// loop through rows and add markers to array
while ($row = pg_fetch_assoc($result)) {
  $markers[] = array(
    'lat' => $row['lat'],
    'lng' => $row['lng'],
    'name' => $row['name']
  );
}

// convert array to JSON format
$markersJson = json_encode($markers);

// close database connection
pg_close($conn);

?>
