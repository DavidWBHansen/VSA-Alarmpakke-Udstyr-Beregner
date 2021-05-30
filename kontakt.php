<?php
if($_POST["bolig"]){
    mail("david214@live.dk", "Form to email message", "Bolig type:". $_POST["bolig"]. "\n" . "Størrelse:" . $_POST["stoerrelse"] . "\n" . "Sikrings løsning:".$_POST["sikring"] . "\n" . "Antsl døre:". $_POST["Antal-Doere"]  . "\n" . "Antal vinduer:" .$_POST["Antal-vinduer"] . "\n" . "kæledyr:" .$_POST["kæledyr"] . "\n" . "Brand der hjemme:" .$_POST["BrandHjemme"] . "\n" ."Postnummer:  ". $_POST["postnummer"] . "\n" . "Mobilnummer: ". $_POST["nummer"], "From: david215@live.dk");
}
?>
