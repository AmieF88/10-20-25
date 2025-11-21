function convertDistance() {
    let km = parseFloat(document.getElementById("kmInput").value);

    if (isNaN(km)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    let miles = km / 1.60934;
    document.getElementById("result").textContent =
        `${km} kilometers = ${miles.toFixed(3)} miles`;
}
