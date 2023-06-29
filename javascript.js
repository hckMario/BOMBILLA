function colocar(){
    document.getElementById('bombillaEncendida').style.visibility='hidden';
    document.getElementById('dos').style.visibility='hidden';
    document.getElementById('bombillaApagada').style.visibility='visible';
    document.getElementById('uno').style.visibility='visible';
}
function encender(){
    document.getElementById('bombillaApagada').style.visibility='hidden';
    document.getElementById('bombillaEncendida').style.visibility='visible';
    document.getElementById('dos').style.visibility='visible';
    document.getElementById('uno').style.visibility='hidden';
}
function apagar(){
    document.getElementById('bombillaApagada').style.visibility='visible';
    document.getElementById('bombillaEncendida').style.visibility='hidden';
    document.getElementById('dos').style.visibility='hidden';
    document.getElementById('uno').style.visibility='visible';
}
    
