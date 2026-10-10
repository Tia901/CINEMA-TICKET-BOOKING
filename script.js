

function calculateTicket() { 
    let customername = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let tickets = Number(document.getElementById("tickets").value);
    let ticketprice = 0;
    if (age < 12) {
        ticketprice = 5;
    } else if (age >= 12 && age <= 17) {
        ticketprice = 7;
    } else {
        ticketprice = 10;
    }
    let totalprice = ticketprice * tickets
    document.getElementById("result").innerHTML = "<h3>" + customername + "'s Ticket</h3>" + "<p>Number of tickets: " + tickets + "</p>" + "<p>Total: $" + totalprice + "</p>";
}

function clearTicket() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("tickets").value = "";
    document.getElementById("result").innerHTML = "";
}