function calculateCompoundInterest(event) {
    event.preventDefault();
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var time = document.getElementById("time").value;
    var frequency = document.getElementById("frequency").value;
    var compoundInterest;

    switch (frequency) {
        case "daily":
            compoundInterest = principal * Math.pow((1 + rate / 36500), time * 365);
            break;
        case "weekly":
            compoundInterest = principal * Math.pow((1 + rate / 5200), time * 52);
            break;
        case "monthly":
            compoundInterest = principal * Math.pow((1 + rate / 1200), time * 12);
            break;
        case "bi-annually":
            compoundInterest = principal * Math.pow((1 + rate / 200), time * 2);
            break;
        default:
            compoundInterest = principal * Math.pow((1 + rate / 100), time);
    }

    document.getElementById("result").innerHTML = "Compound Interest: " + compoundInterest.toFixed(2);
}
