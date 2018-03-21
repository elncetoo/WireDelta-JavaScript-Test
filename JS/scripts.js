    //task1
    function calculateAge(birthYear, currentYear) {

        let age1 = currentYear - birthYear;
        let age2 = age1 - 3;
        document.getElementById('Age').innerHTML = 'You are either ' + age1 + ' or ' + age2 + '.';
    }

    //task2
    function calculateSupply(age, amountPerDay) {
        const maxAge = 99;
        let amount = (maxAge-age) * (amountPerDay * 365);
        document.getElementById('Supply').innerHTML = 'You will need ' + amount + ' cups of coffee to last you until the ripe old age of ' + age + '.';
    }

    //task3 
    let radius = 2.5;
    const circumfrence = Math.PI.toFixed(2) * (2 * radius);
    const area = Math.PI.toFixed(2) * (radius * radius);

    function calcCircumfrence(radius){
        return circumfrence;
    }

    document.getElementById('calcC').innerHTML = 'The circumference is: ' + calcCircumfrence().toFixed(2) + '.';


    function calcArea(radius) {
        return area;
    }    

    document.getElementById('calcA').innerHTML = 'The area is: ' + calcArea().toFixed(2) + '.';

    //task4
    let celsius = 30;
    let fahrenheit = 40;
    const celToF = (celsius * 9) / 5 + 32;
    const fahrToC = ((fahrenheit - 32) * 5) / 9;

    function celsiusToFahrenheit(celsius) {
        return celToF;
    }
    
    document.getElementById('toC').innerHTML = celsius + '&deg;C is ' + celToF.toFixed(1) + '&deg;F.';

    function fahrenheitToCelsius(fahrenheit) {
        return fahrToC;
    }
        
    document.getElementById('toF').innerHTML = fahrenheit + '&deg;F is ' + fahrToC.toFixed(1) + '&deg;C.';
