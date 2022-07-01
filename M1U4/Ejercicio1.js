var metros = prompt('Igrese la cantidad de metros hasta su destino');

if(metros>= 0 &&  metros <= 1000) {alert ("Mejor ruta a pie")}
if(metros >= 1000 && metros <= 10000) {alert ("Mejor ruta en bicicleta")}
if(metros >= 10000 && metros <= 30000) {alert ("Mejor ruta en transporte publico")}
if(metros >= 30000 && metros <= 100000) {alert ("Mejor ruta en auto")}
if(metros >= 100000 && metros <=99999999999) {alert ("Mejor ruta en avion")}
