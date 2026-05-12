function calculateEMI(){
    let P = document.getElementById("amount").value;
    let R = document.getElementById("rate").value;
    let Y = document.getElementById("years").value;

    let r = R/(12*100);
    let n = Y*12;
    let emi = (P * r * Math.pow(1+R,n) / (Math.pow(1+R,n)-1));

    document.getElementById("result").innerText = "Monthly EMI: $" + emi.toFixed(2);
}