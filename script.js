const bookingForm = document.getElementById("bookingForm");
const results = document.getElementById("results");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value;

    if (!from || !to || !date) {
        alert("Please fill all fields.");
        return;
    }

    const buses = [
        {
            name: "Express Travels",
            departure: "08:00 AM",
            arrival: "02:00 PM",
            price: 750,
            seats: 25
        },
        {
            name: "City Bus Express",
            departure: "10:30 AM",
            arrival: "04:30 PM",
            price: 650,
            seats: 18
        },
        {
            name: "GreenLine Travels",
            departure: "09:00 PM",
            arrival: "05:00 AM",
            price: 900,
            seats: 12
        }
    ];

    results.innerHTML = `
        <h3>Available Buses</h3>
        <p>
            <strong>${from}</strong> → <strong>${to}</strong>
            | ${date}
        </p>
    `;

    buses.forEach((bus) => {
        const card = document.createElement("div");
        card.className = "bus-card";

        card.innerHTML = `
            <div class="bus-details">
                <h3>${bus.name}</h3>
                <p>🕐 ${bus.departure} - ${bus.arrival}</p>
                <p>💺 ${bus.seats} seats available</p>
                <p>💰 ₹${bus.price}</p>
            </div>

            <button class="btn" onclick="bookBus('${bus.name}', ${bus.price})">
                Book Now
            </button>
        `;

        results.appendChild(card);
    });
});

function bookBus(busName, price) {
    alert(
        `Booking successful!\n\n` +
        `Bus: ${busName}\n` +
        `Price: ₹${price}\n\n` +
        `Thank you for booking with BusGo!`
    );
}
