let lugarResidencia = prompt("Indica la calle donde vives: ");

if(lugarResidencia == "Calle Los Claveles" || lugarResidencia == "Calle El Rosal" ||  lugarResidencia == "Calle Las Hortensias" || lugarResidencia == "Calle Las Margaritas"){
    alert("COGE LA LINEA 1 PARA LLEGAR A TU TRABAJO!!")
}else if(lugarResidencia == "Calle Teleno" || lugarResidencia == "Calle Catoute" || lugarResidencia == "Calle Peña Ubiña" || lugarResidencia == "Calle Vizcodillo"){
    alert("COGE LA LINEA 2 PARA LLEGAR A TU TRABAJO!!");
}else if(lugarResidencia == "Calle Astorga" || lugarResidencia == "Calle La Bañeza" || lugarResidencia == "Calle Benavente"){
    alert("COGE LA LINEA 3 PARA LLEGAR A TU TRABAJO!!");
}else{
    alert("NO HAY LINEAS CERCA PARA LLEGAR A TU TRABAJO!!");
}