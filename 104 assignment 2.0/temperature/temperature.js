function Converttofahrenheit() {
    var celsius =parseFloat(prompt("ENTER THE TEMPERATURE IN DEGREE CELSIUS"));
    var fahrenheit = (celsius *9/5) +32;
    alert(celsius+  "degree celsius is  equal to" +fahrenheit.toFixed(2));
}
Converttofahrenheit();