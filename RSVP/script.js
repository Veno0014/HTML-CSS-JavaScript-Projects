function submitForm() {
    // collects the values from the forms
    const name = document.getElementById("Fname").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const attend = document.getElementById("attendees").value;
    const time = document.getElementById("time").value;
    const menu = document.getElementById("menu").value;
    const selectTable = document.getElementById("table").value;

    // Prints out RSVP confirmation
    document.getElementById("printName").textContent = `Full Name: ${name}`;
    document.getElementById("printNumber").textContent = `Phone Number: ${number}`;
    document.getElementById("printEmail").textContent = `Email: ${email}`;
    document.getElementById("printAttendees").textContent = `Number of Attendees: ${attend}`;
    document.getElementById("printTime").textContent = `Arrival Time: ${time}`;
    document.getElementById("printMenu").textContent = `Menu Preference: ${menu}`;
    document.getElementById("printTable").textContent = `Selected Table: ${selectTable}`;

    // Hides the output until the button is clicked
    document.getElementById("RSVP").classList.add("hide");
    document.getElementById("print").classList.remove("hide");
}


//Allows the users to print the RSVP
function printPage() {
    window.print();
}
